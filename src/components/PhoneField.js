import React, { useState, useEffect } from 'react';
//importing form the libphonenumber
import { parsePhoneNumber, isValidPhoneNumber, getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { ChevronDown } from 'lucide-react';

// Creating a component to display country flags using ISO codes
const CountryFlag = ({ countryCode }) => {
  // Normalizing country code (for edge cases like UK → GB)
  if (countryCode === 'UK') countryCode = 'GB';
  
  return (
    <span className="inline-block w-6 h-4 mr-2 bg-contain bg-no-repeat" 
          style={{ 
            backgroundImage: `url(https://flagcdn.com/w20/${countryCode.toLowerCase()}.png)`,
            backgroundPosition: 'center'
          }}>
    </span>
  );
};

// Processing country data with calling codes
const countryData = getCountries().map(country => {
  return {
    code: country,
    dialCode: `+${getCountryCallingCode(country)}`,
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country)
  };
});

// Sorting countries alphabetically by name
countryData.sort((a, b) => a.name.localeCompare(b.name));

const PhoneField = ({
  value = '',
  onChange,
  placeholder = 'Phone number',
  required = false,
  defaultCountry = 'US',
  label = 'Phone Number',
  error = '',
  className = '',
  disabled = false,
  name = 'phone'
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(
    countryData.find(c => c.code === defaultCountry) || countryData[0]
  );
  const [isValid, setIsValid] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countryData);

  // Initializing component with value if provided
  useEffect(() => {
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          const countryCode = phoneNumber.country;
          const nationalNumber = phoneNumber.nationalNumber;
          
          if (countryCode) {
            const country = countryData.find(c => c.code === countryCode);
            if (country) {
              setSelectedCountry(country);
            }
          }
          
          setInputValue(nationalNumber);
        }
      } catch (error) {
        // If parsing fails, using the raw value
        setInputValue(value.replace(/^\+\d+\s/, ''));
      }
    }
  }, []);

  // Filtering countries based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = countryData.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        country.dialCode.includes(searchTerm)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countryData);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    // Striping non-numeric characters except for allowed symbols
    const rawValue = e.target.value.replace(/[^0-9+\-\s()]/g, '');
    setInputValue(rawValue);
    
    // Constructing full international number for validation and onChange callback
    const fullNumber = `${selectedCountry.dialCode} ${rawValue}`;
    
    try {
      // Checking if the number is valid for the selected country
      const isValidNumber = isValidPhoneNumber(fullNumber, selectedCountry.code);
      setIsValid(isValidNumber);
    } catch (error) {
      setIsValid(false);
    }
    
    // Calling the parent onChange with the full international number
    if (onChange) {
      onChange(fullNumber);
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    
    // Updating the full phone number with the new country code
    const fullNumber = `${country.dialCode} ${inputValue}`;
    
    try {
      // Validating with new country code
      const isValidNumber = isValidPhoneNumber(fullNumber, country.code);
      setIsValid(isValidNumber);
    } catch (error) {
      setIsValid(false);
    }
    
    if (onChange) {
      onChange(fullNumber);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const formatPhoneNumber = (phoneNumber, countryCode) => {
    try {
      const parsed = parsePhoneNumber(phoneNumber, countryCode);
      return parsed.formatInternational();
    } catch (error) {
      return phoneNumber;
    }
  };

  // Closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.country-selector')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1 text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative flex items-center">
        {/* Country selector */}
        <div className="relative country-selector">
          <button
            type="button"
            className={`flex items-center justify-between px-3 py-2 border ${
              !isValid && inputValue ? 'border-red-500' : 'border-gray-300'
            } rounded-l-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => !disabled && setDropdownOpen(!dropdownOpen)}
            disabled={disabled}
          >
            <span className="flex items-center">
              <CountryFlag countryCode={selectedCountry.code} />
              <span className="hidden sm:inline">{selectedCountry.dialCode}</span>
            </span>
            <ChevronDown size={16} className="ml-1" />
          </button>
          
          {dropdownOpen && (
            <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="p-2 border-b">
                <input
                  type="text"
                  placeholder="Search countries..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  autoFocus
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <div
                    key={country.code}
                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCountryChange(country)}
                  >
                    <CountryFlag countryCode={country.code} />
                    <span className="text-sm flex-grow">{country.name}</span>
                    <span className="text-sm text-gray-500">{country.dialCode}</span>
                  </div>
                ))}
                {filteredCountries.length === 0 && (
                  <div className="px-3 py-2 text-sm text-gray-500">No countries found</div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Phone number input */}
        <input
          type="tel"
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`flex-grow px-3 py-2 border-y border-r ${
            !isValid && inputValue ? 'border-red-500' : 'border-gray-300'
          } rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-invalid={!isValid && inputValue ? 'true' : 'false'}
        />
      </div>
      
      {/* Error message or formatting hint */}
      {error ? (
        <div className="mt-1 text-sm text-red-500">{error}</div>
      ) : !isValid && inputValue ? (
        <div className="mt-1 text-sm text-red-500">
          Please enter a valid phone number for {selectedCountry.name}
        </div>
      ) : inputValue ? (
        <div className="mt-1 text-xs text-gray-500">
          Formatted: {formatPhoneNumber(`${selectedCountry.dialCode}${inputValue}`, selectedCountry.code)}
        </div>
      ) : null}
    </div>
  );
};

export default PhoneField;
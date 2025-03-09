import React, { useState, useEffect } from 'react';
// Importing from libphonenumber-js for phone number validation and formatting
import { 
  parsePhoneNumber, 
  isValidPhoneNumber, 
  getCountries, 
  getCountryCallingCode,
  CountryCode // Importing the CountryCode type
} from 'libphonenumber-js';
import { ChevronDown } from 'lucide-react';

//this is an Interface for country data structure
interface CountryDataItem {
  code: CountryCode;   
  dialCode: string;    
  name: string;        
}

// Props for CountryFlag component
interface CountryFlagProps {
  countryCode: CountryCode;
}

// Creating a component to display country flags using ISO codes
const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode }) => {
  const displayCode = countryCode === 'GB' as any ? 'GB' : countryCode;
  
  return (
    <span className="inline-block w-6 h-4 mr-2 bg-contain bg-no-repeat" 
          style={{ 
            // Using flagcdn.com to display country flags based on country code
            backgroundImage: `url(https://flagcdn.com/w20/${displayCode.toLowerCase()}.png)`,
            backgroundPosition: 'center'
          }}>
    </span>
  );
};

// Processing country data with calling codes
// This creates an array of all countries with their codes and dial codes
const countryData: CountryDataItem[] = getCountries().map(country => {
  return {
    code: country,
    dialCode: `+${getCountryCallingCode(country)}`,
    // Using Intl.DisplayNames to get localized country names
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country
  };
});

// Sorting countries alphabetically by name for better UX in the dropdown
countryData.sort((a, b) => a.name.localeCompare(b.name));

interface PhoneFieldProps {
  value?: string;                      
  onChange?: (value: string) => void;  
  placeholder?: string;                
  required?: boolean;                  
  defaultCountry?: CountryCode;       
  label?: string;                      
  error?: string;                     
  className?: string;                  
  disabled?: boolean;                  
  name?: string;                     
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  value = '',
  onChange,
  placeholder = 'Phone number',
  required = false,
  defaultCountry = 'US' as CountryCode,
  label = 'Phone Number',
  error = '',
  className = '',
  disabled = false,
  name = 'phone'
}) => {
  // State for the national number part (without country code)
  const [inputValue, setInputValue] = useState('');
  
  // State for the currently selected country
  const [selectedCountry, setSelectedCountry] = useState<CountryDataItem>(
    countryData.find(c => c.code === defaultCountry) || countryData[0]
  );
  
  // Validation state
  const [isValid, setIsValid] = useState(true);
  
  // Dropdown open/close state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Search term for filtering countries
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtered list of countries based on search
  const [filteredCountries, setFilteredCountries] = useState<CountryDataItem[]>(countryData);

  useEffect(() => {
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          const countryCode = phoneNumber.country;
          const nationalNumber = phoneNumber.nationalNumber;
          
          // If we can detect the country, select it in the dropdown
          if (countryCode) {
            const country = countryData.find(c => c.code === countryCode);
            if (country) {
              setSelectedCountry(country);
            }
          }
          
          setInputValue(nationalNumber);
        }
      } catch (error) {
        // If parsing fails, using the raw value without the country code
        setInputValue(value.replace(/^\+\d+\s/, ''));
      }
    }
  }, []);

  // Filtering countries based on search term
  // This effect runs whenever the search term changes
  useEffect(() => {
    if (searchTerm) {
      const filtered = countryData.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        country.dialCode.includes(searchTerm)
      );
      setFilteredCountries(filtered);
    } else {
      // If no search term, showing all countries
      setFilteredCountries(countryData);
    }
  }, [searchTerm]);

  // Handler for input field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Striping non-numeric characters except for allowed symbols
    const rawValue = e.target.value.replace(/[^0-9+\-\s()]/g, '');
    setInputValue(rawValue);
    
    const fullNumber = `${selectedCountry.dialCode} ${rawValue}`;
    
    try {
      // Checking if the number is valid for the selected country
      const isValidNumber = isValidPhoneNumber(fullNumber, selectedCountry.code);
      setIsValid(isValidNumber);
    } catch (error) {
      setIsValid(false);
    }
    
    if (onChange) {
      onChange(fullNumber);
    }
  };

  // Handler for country selection
  const handleCountryChange = (country: CountryDataItem) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    
    const fullNumber = `${country.dialCode} ${inputValue}`;
    
    try {
      const isValidNumber = isValidPhoneNumber(fullNumber, country.code);
      setIsValid(isValidNumber);
    } catch (error) {
      setIsValid(false);
    }
    
    if (onChange) {
      onChange(fullNumber);
    }
  };

  // Handler for search input in country dropdown
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Helper function to format phone numbers for display
  const formatPhoneNumber = (phoneNumber: string, countryCode: CountryCode) => {
    try {
      const parsed = parsePhoneNumber(phoneNumber, countryCode);
      return parsed.formatInternational();
    } catch (error) {
      // Returning the original if formatting fails
      return phoneNumber;
    }
  };

  // Closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest('.country-selector')) {
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
      {}
      {label && (
        <label className="mb-1 text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative flex items-center">
        {}
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
              {/* Displaying country flag */}
              <CountryFlag countryCode={selectedCountry.code} />
              {/* Showing dial code on larger screens */}
              <span className="hidden sm:inline">{selectedCountry.dialCode}</span>
            </span>
            <ChevronDown size={16} className="ml-1" />
          </button>
          
          {/* Country dropdown menu */}
          {dropdownOpen && (
            <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {/* Search input for countries */}
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
              {/* Scrollable list of countries */}
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
                {/* No results message */}
                {filteredCountries.length === 0 && (
                  <div className="px-3 py-2 text-sm text-gray-500">No countries found</div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Phone number input field */}
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
      
      {/* Error message display logic */}
      {error ? (
        // Showing custom error message if provided
        <div className="mt-1 text-sm text-red-500">{error}</div>
      ) : !isValid && inputValue ? (
        // Showing validation error if input is invalid
        <div className="mt-1 text-sm text-red-500">
          Please enter a valid phone number for {selectedCountry.name}
        </div>
      ) : inputValue ? (
        // Showing formatted number as a hint when valid
        <div className="mt-1 text-xs text-gray-500">
          Formatted: {formatPhoneNumber(`${selectedCountry.dialCode}${inputValue}`, selectedCountry.code)}
        </div>
      ) : null}
    </div>
  );
};

export default PhoneField;
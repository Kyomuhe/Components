import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AppButton from '../components/AppButton';

const SymptomsForm: React.FC = () => {
  const [duration, setDuration] = useState<string>('');
  const [durationUnit, setDurationUnit] = useState<string>('Days');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [otherSymptom, setOtherSymptom] = useState<string>('');

  const symptomOptions = [
    'Fever',
    'Difficulty sleeping',
    'Mood changes',
    'Fever',
    'Feeling dizzy',
    'Fatigue/ weakness',
    'Loss of appetite',
    'High blood pressure',
    'Difficulty sleeping',
    'Periods'
  ];

  const durationUnits = ['Hours', 'Days', 'Months', 'Years'];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl p-6 space-y-6 font-gt-walsheim">
      <div className="flex items-center justify-between">
        <div 
          className="text-[#101828] h-[24px]"
        >
          1. How long have you been experiencing these symptoms?
        </div>
        <button 
          className="h-[24px] text-custom-blue px-2 py-1 rounded"
        >
          Skip
        </button>
      </div>

      {/* Duration Input Container */}
      <div className="flex">
        <div 
          className="border border-[#C1BDBD]"
          style={{
            width: '60px', 
            height: '54px', 
            borderRadius: '9px', 
            borderWidth: '1.5px'
          }}
        >
          <input 
            type="number" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full h-full text-center outline-none"
            min="0"
            style={{
              backgroundColor: 'transparent'
            }}
          />
        </div>
        <div 
          className="flex items-center justify-between px-2 relative"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{durationUnit}</span>
          <ChevronDown size={20} className="text-gray-500" />
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10">
              {durationUnits.map((unit) => (
                <div 
                  key={unit} 
                  className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setDurationUnit(unit);
                    setIsDropdownOpen(false);
                  }}
                >
                  {unit}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Second Question: Symptoms Checklist */}
      <div className="space-y-4">
        <h3 className="h-[24px] text-[#101828] ">2. Do You have any of these Symptoms</h3>
        <div className="grid grid-cols gap-3">
            <p className='text-[#667085] h-[17px]'>General symptoms</p>

          {symptomOptions.map((symptom) => (
            <label key={symptom} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => {
                  setSelectedSymptoms(prev => 
                    prev.includes(symptom) 
                    ? prev.filter(s => s !== symptom)
                    : [...prev, symptom]
                  );
                }}
                className="form-checkbox"
              />
              <span className='text-[#101828]'>{symptom}</span>
            </label>
          ))}
        </div>
        <div className='h-[4px]'></div>

        {/* complaint area */}
        <div className='flex flex-col'>
            <p className='h-[20px] text-gray'>Others,specify below</p>
        <textarea 
          placeholder="Type your complaints...."
          className="w-full p-2 mt-4"
          style={{
            width: '358px',
            height: '80px',
            borderRadius: '6px',
            borderWidth: '1px',
            background: '#FFFFFF',
            border: '1px solid #D0D5DD'
          }}
          value={otherSymptom}
          onChange={(e) => setOtherSymptom(e.target.value)}
        />
        </div>
        <AppButton
        variant="primary"
        className="flex items-center justify-center relative left-[800px]"
        leftIcon={null}
        rightIcon={null}
        >
            Next
        </AppButton>

        
      </div>
    </div>
  );
};

export default SymptomsForm;
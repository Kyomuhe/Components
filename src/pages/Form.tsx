import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const MedicationForm: React.FC = () => {
  const [isMedicationTaken, setIsMedicationTaken] = useState<string | null>(null);
  const [medications, setMedications] = useState<{name: string, duration: string, durationUnit: string}[]>([]);
  const [newMedicationName, setNewMedicationName] = useState('');
  const [newMedicationDuration, setNewMedicationDuration] = useState('');
  const [newMedicationDurationUnit, setNewMedicationDurationUnit] = useState('Days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasSurgery, setHasSurgery] = useState<string | null>(null);
  const [hasCondition, setCondition] = useState<string | null>(null);



  const durationUnits = ['Hours', 'Days', 'Weeks', 'Months', 'Years'];

  const handleAddMedication = () => {
    if (newMedicationName) {
      setMedications([...medications, {
        name: newMedicationName,
        duration: newMedicationDuration,
        durationUnit: newMedicationDurationUnit
      }]);
      // Reset input fields
      setNewMedicationName('');
      setNewMedicationDuration('');
      setNewMedicationDurationUnit('Days');
    }
  };

  return (
    <div className='w-full max-w-2xl p-6 space-y-6 font-gt-walsheim'>
      <h1 className='text-[#101828] h-[24px]'>3. Are you currently taking any medications?</h1>
      <p className='text-[#667085] h-[15px]'>Please consider any medications you are currently taking, including those taken on a regular basis.</p>

      {/* Yes/No Selection with Radio Buttons */}
      <div 
        className="flex"
        style={{
          width: '358px',
          height: '44px',
          gap: '8px'
        }}
      >
        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="medication"
            value="Yes"
            checked={isMedicationTaken === 'Yes'}
            onChange={() => setIsMedicationTaken('Yes')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${isMedicationTaken === 'Yes' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${isMedicationTaken === 'Yes' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {isMedicationTaken === 'Yes' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            Yes
          </div>
        </label>

        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="medication"
            value="No"
            checked={isMedicationTaken === 'No'}
            onChange={() => setIsMedicationTaken('No')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${isMedicationTaken === 'No' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${isMedicationTaken === 'No' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {isMedicationTaken === 'No' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            No
          </div>
        </label>
      </div>

      {/* Medication Details Container - No Border */}
      {isMedicationTaken === 'Yes' && (
        <div 
          className="p-4"
          style={{
            width: '358px',
            height: '108px'
          }}
        >
          <p className="mb-2 text-[#667085]">If yes, then list medications below?</p>

          {/* Medication Name Input */}
          <div className="flex items-center mb-2">
            <div 
              className="border-b border-[#D0D5DD] flex-grow"
              style={{
                width: '230px',
                height: '25px'
              }}
            >
              <input 
                type="text"
                placeholder="Medication Name"
                value={newMedicationName}
                onChange={(e) => setNewMedicationName(e.target.value)}
                className="w-full outline-none"
              />
            </div>

            {/* Duration Container */}
            <div 
              className="flex pl-2 relative top-[16px] text-[#1D2939]"
              style={{
                height: '44px',
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>How long</span>
              <ChevronDown size={20} className="text-gray-500" />
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10">
                  {durationUnits.map((unit) => (
                    <div 
                      key={unit} 
                      className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setNewMedicationDurationUnit(unit);
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

          {/* Add Medication */}
          <div 
            className="flex items-center cursor-pointer text-[#344054] hover:text-blue-500 hover:bg-blue-50"
            style={{
              width: '358px',
              height: '24px',
              gap: '8px'
            }}
            onClick={handleAddMedication}
          >
            <Plus size={20} />
            <span>Add new medication</span>
          </div>
        </div>
      )}

      {/* Displayed Medications */}
      {medications.length > 0 && (
        <div className="mt-4">
          <h3 className="text-custom-blue mb-2">Current Medications:</h3>
          {medications.map((med, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <span>{med.name}</span>
              <span>{med.duration} {med.durationUnit}</span>
            </div>
          ))}
        </div>
      )}
    <div className='flex flex-col w-full font-gt-walsheim space-y-4'>
      <div>
        <h1 className='text-[#101828] h-[28px]'>4. Have you had any surgeries?</h1>
        <p className='text-[#667085] h-[24px]'>Examples: Appendectomy, Tonsillectomy, Knee replacement.</p>
      </div>

      {/* Yes/No Selection with Radio Buttons */}
      <div 
        className="flex"
        style={{
          width: '358px',
          height: '44px',
          gap: '8px'
        }}
      >
        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="surgery"
            value="Yes"
            checked={hasSurgery === 'Yes'}
            onChange={() => setHasSurgery('Yes')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${hasSurgery === 'Yes' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${hasSurgery === 'Yes' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {hasSurgery === 'Yes' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            Yes
          </div>
        </label>

        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="surgery"
            value="No"
            checked={hasSurgery === 'No'}
            onChange={() => setHasSurgery('No')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${hasSurgery === 'No' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${hasSurgery === 'No' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {hasSurgery === 'No' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            No
          </div>
        </label>
      </div>
    </div>
    {/*5 */}
    <div className='flex flex-col w-full font-gt-walsheim space-y-4'>
      <div>
        <h1 className='text-[#101828] h-[28px]'>5. Do you have any medical Conditions?</h1>
        <p className='text-[#667085] h-[24px]'>Not sure? Choose yes to browse a list of conditions and diseases.</p>
        <p className='text-[#667085] h-[24px]'>Examples: High Cholesterol, Insomnia, Asthma</p>

      </div>

      <div 
        className="flex"
        style={{
          width: '358px',
          height: '44px',
          gap: '8px'
        }}
      >
        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="surgery"
            value="Yes"
            checked={hasCondition === 'Yes'}
            onChange={() => setCondition('Yes')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${hasCondition === 'Yes' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${hasCondition === 'Yes' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {hasCondition === 'Yes' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            Yes
          </div>
        </label>

        <label className="flex-1 flex items-center justify-center relative cursor-pointer">
          <input
            type="radio"
            name="surgery"
            value="No"
            checked={hasCondition === 'No'}
            onChange={() => setCondition('No')}
            className="absolute opacity-0"
          />
          <div className={`flex items-center ${hasCondition === 'No' ? 'text-blue-700' : 'text-gray-700'}`}>
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 
              ${hasCondition === 'No' ? 'bg-blue-500' : 'border-2 border-gray-300'}`}
            >
              {hasCondition === 'No' && (
                <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
              )}
            </div>
            No
          </div>
        </label>
      </div>
    </div>


    </div>
  );
};

export default MedicationForm;
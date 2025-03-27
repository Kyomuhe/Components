import React, { useState } from 'react';
import left from '../images/left.png';
import right from '../images/right.png';

const DateTimeSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate days for the current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return { firstDay, lastDay };
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const { firstDay, lastDay } = getDaysInMonth(currentMonth);
    const days: (number | null)[] = [];
    
    // Add padding for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Add actual days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    
    return days;
  };

  // Navigate months
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + (direction === 'prev' ? -1 : 1));
    setCurrentMonth(newMonth);
  };

  // Select a day
  const selectDay = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  // Time slots
  const timeSlots = [
    '10:30am', '11:00am', '11:30am', '12:00pm', 
    '12:30pm', '1:00pm', '1:30pm', '2:00pm'
  ];

  return (
    <div 
      className="w-[579.55px] bg-white flex flex-col" 
      style={{ height: '682.65px' }}
    >
      {/* Title */}
      <div 
        className="text-custom-blue font-medium text-[23px] text-left py-2 ml-0"
        style={{ 
          width: '244.26px', 
          height: '28.87px', 
        }}
      >
        Select time and date
      </div>

      {/* Spacer */}
      <div className="h-10"></div>

      {/* Calendar */}
      <div 
        className="flex flex-col space-y-4"
        style={{ 
          width: '494.06px', 
          height: '457.27px' 
        }}
      >
        {/* Month Navigation */}
        <div 
          className="flex justify-between items-center p-2 bg-custom-blue"
          style={{ 
            width: '494.06px', 
            height: '99.86px', 
          }}
        >
          <img 
            className="p-2 cursor-pointer"
            onClick={() => navigateMonth('prev')}
            src={left}
            alt="Previous month"
          />
          
          <div className="text-white font-bold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
          
          <img 
            className="p-2 cursor-pointer"
            onClick={() => navigateMonth('next')}
            src={right}
            alt="Next month"
          />
        </div>

        {/* Days of Week */}
        <div 
          className="grid grid-cols-7 text-center text-[#073B5B]"
          style={{ 
            width: '487.06px', 
            height: '26.28px', 
          }}
        >
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {generateCalendarDays().map((day, index) => (
            day !== null ? (
              <div 
                key={index}
                className={`text-center p-2 cursor-pointer ${
                  selectedDate && selectedDate.getDate() === day 
                    ? 'bg-[#112369] text-white' 
                    : 'bg-[#E6EAF5] text-black'
                }`}
                style={{ 
                  width: '61.32px', 
                  height: '45.55px' 
                }}
                onClick={() => selectDay(day)}
              >
                {day}
              </div>
            ) : (
              <div 
                key={index}
                className="opacity-0"
                style={{ 
                  width: '61.32px', 
                  height: '45.55px' 
                }}
              />
            )
          ))}
        </div>


        {/* Selected Date */}
        <div className="text-left">
          {selectedDate && (
            <div>{selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long' 
            })}</div>
          )}
        </div>

        {/* Spacer */}
        <div className="h-4"></div>

{/* Time Slots */}
<div 
  className="flex flex-wrap justify-start items-start gap-2"
  style={{ 
    width: '579.55px', 
    minHeight: '82px', 
    height: 'auto', 
  }}
>
  {timeSlots.map((time) => (
    <div 
      key={time}
      className={`flex items-center justify-center cursor-pointer  rounded-[4px] ${
        selectedTime === time ? 'bg-[#F6F6F6] text-black border-2 border-blue-500' : 'bg-white text-black border border-[#7E7E7E]'
      }`}
      style={{ 
        width: '93px', 
        height: '36px',
        padding: '8px 19px' 
      }}
      onClick={() => setSelectedTime(time)}
    >
      {time}
    </div>
  ))}
</div>
</div>
</div>
  );
};

export default DateTimeSelector;
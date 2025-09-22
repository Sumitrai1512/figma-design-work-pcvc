import { useState } from 'react';

export default function LanguageDropdown({ label, selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'gujarati', label: 'Gujarati' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    onSelect(language);
    setIsOpen(false);
  };

  return (
    <div 
      style={{
        width: '320px',
        position: 'relative',
        opacity: 1
      }}
    >
      {/* Label */}
      <div 
        style={{
          width: '320px',
          height: '16px',
          opacity: 1,
          marginBottom: '4px'
        }}
      >
        <label 
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '16px',
            color: '#374151',
            opacity: 1
          }}
        >
          {label}
        </label>
      </div>
      
      {/* Dropdown Box */}
      <div 
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
        style={{
          width: '320px',
          height: '36px',
          paddingTop: '8px',
          paddingBottom: '8px',
          gap: '4px',
          opacity: 1,
          borderBottom: '1px solid #E5E7EB'
        }}
      >
        <span 
          style={{
            width: '280px',
            height: '20px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#374151',
            opacity: 1,
            verticalAlign: 'middle'
          }}
        >
          {selectedValue || 'Select'}
        </span>
        
        <div style={{ marginLeft: 'auto' }}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#9CA3AF" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '320px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            opacity: 1,
            paddingTop: '12px', // Extra padding from top
            paddingBottom: '12px' // Extra padding from bottom
          }}
        >
          {/* Static Scroll Bar */}
          <div 
            style={{
              position: 'absolute',
              top: '8px', // Small padding from top
              right: '8px', // Small padding from right edge
              width: '4px',
              height: '86px',
              borderRadius: '4px',
              backgroundColor: '#9CA3AF', // var(--Color-Grey-500, #9CA3AF)
              opacity: 1,
              transform: 'rotate(0deg)' // angle: 0 deg
            }}
          />
          
          {/* Options Container */}
          <div>
            {languages.map((language) => (
              <div
                key={language.value}
                onClick={() => handleSelect(language.label)}
                className="hover:bg-gray-50 cursor-pointer"
                style={{
                  width: '100%',
                  height: '40px',
                  padding: '10px 16px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2px' // Small gap between options
                }}
              >
                {language.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

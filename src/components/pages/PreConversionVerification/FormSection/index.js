'use client';

import { useState } from 'react';
import FormHeading from './components/FormHeading';
import InputField from './components/InputField';
import LanguageDropdown from './components/LanguageDropdown';

export default function FormSection() {
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Empty string for "Select" placeholder

  return (
    <div 
      style={{
        width: '347px', // Match TopBanner maxWidth for alignment
        height: '324px',
        paddingTop: '15px',
        paddingRight: '15px',
        paddingBottom: '15px',
        paddingLeft: '15px',
        gap: '2px',
        borderRadius: '16px',
        opacity: 1,
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 3px 0px #0000001A, 0px 1px 2px 0px #0000000F',
        marginTop: '20px',
        marginLeft: '0px', // Align with TopBanner left edge
        marginRight: '0px' // Remove right margin to align with TopBanner
      }}
    >
      {/* Form Heading */}
      <FormHeading>Please check and confirm details</FormHeading>
      
      {/* Form Fields Container */}
      <div style={{ marginTop: '20px', gap: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Application No Field */}
        <InputField 
          label="Application No."
          value="1100026323587" 
          isDisabled={true}
        />
        
        {/* Mobile No Field */}
        <InputField 
          label="Mobile No."
          value="+ 91 8764578235" 
          isDisabled={true}
        />
        
        {/* Language Selection Dropdown */}
        <LanguageDropdown 
          label="Language"
          selectedValue={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </div>
    </div>
  );
}

export default function InputField({ label, value, isDisabled = false, hasDropdown = false, onDropdownClick }) {
  return (
    <div 
      style={{
        width: '320px',
        height: '52px',
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
      
      {/* Input Box */}
      <div 
        className={`flex items-center ${hasDropdown ? 'cursor-pointer' : ''}`}
        onClick={hasDropdown ? onDropdownClick : undefined}
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
            width: hasDropdown ? '280px' : '290px', // Increased from 103px to 290px for better space
            height: '20px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            color: isDisabled ? '#717684' : '#374151',
            opacity: 1,
            verticalAlign: 'middle',
            whiteSpace: 'nowrap', // Prevent text wrapping
            overflow: 'hidden', // Hide overflow if text is too long
            textOverflow: 'ellipsis' // Show ellipsis if text is cut off
          }}
        >
          {value}
        </span>
        
        {hasDropdown && (
          <div style={{ marginLeft: 'auto' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#9CA3AF" strokeWidth="1.5"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

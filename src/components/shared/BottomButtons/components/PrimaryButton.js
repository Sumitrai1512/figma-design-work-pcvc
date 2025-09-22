export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        // Layout
        width: '172.5px',
        height: '40px',
        borderRadius: '8px',
        paddingTop: '12px', // Primitives/Spacing/3
        paddingRight: '24px', // Primitives/Spacing/6
        paddingBottom: '12px', // Primitives/Spacing/3
        paddingLeft: '24px', // Primitives/Spacing/6
        gap: '8px',
        opacity: 1,
        
        // Colors
        backgroundColor: '#ED1C24', // var(--Color-Base-Brand-Red, #ED1C24)
        
        // Borders
        border: 'none',
        
        // Shadows and blurs
        boxShadow: '0px 1px 2px 0px #B111161F',
        
        // Remove default button styles
        cursor: 'pointer',
        outline: 'none',
        
        // Center the content
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Text Container */}
      <div
        style={{
          width: '48px',
          height: '24px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span
          style={{
            width: '48px',
            height: '24px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '16px', // font/size/md
            lineHeight: '24px', // font/line height/24
            color: '#FFFFFF', // var(--Component-colors-Components-Buttons-Primary-button-primary-fg, #FFFFFF)
            opacity: 1,
            textAlign: 'center'
          }}
        >
          {children}
        </span>
      </div>
    </button>
  );
}

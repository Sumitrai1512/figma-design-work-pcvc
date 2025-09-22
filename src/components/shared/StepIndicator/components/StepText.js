export default function StepText({ children, isActive = false, width }) {
  return (
    <div 
      style={{
        width: width,
        opacity: 1,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <span 
        style={{
          fontFamily: 'Poppins',
          fontWeight: isActive ? 500 : 400,
          fontSize: '14px',
          lineHeight: '20px',
          color: isActive ? '#ED1C24' : '#1C2633',
          opacity: 1,
          whiteSpace: 'pre-line'
        }}
      >
        {children}
      </span>
    </div>
  );
}

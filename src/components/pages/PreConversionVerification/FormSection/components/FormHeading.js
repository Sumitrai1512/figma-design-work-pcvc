export default function FormHeading({ children }) {
  return (
    <div 
      style={{
        width: '318px',
        height: '24px',
        opacity: 1
      }}
    >
      <h3 
        style={{
          width: '100%', // Changed from 267px to allow full width
          height: '24px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '18px', // md size
          lineHeight: '24px',
          textAlign: 'center',
          color: '#1C2633',
          opacity: 1,
          margin: 0,
          whiteSpace: 'nowrap' // Ensure text stays in one line
        }}
      >
        {children}
      </h3>
    </div>
  );
}

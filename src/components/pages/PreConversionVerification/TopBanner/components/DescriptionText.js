export default function DescriptionText({ children }) {
  return (
    <p 
      className="flex-shrink-0"
      style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '18px',
        color: '#374254',
        opacity: 1,
        margin: 0,
        width: '100%'
      }}
    >
      {children}
    </p>
  );
}

export default function GradientTitle({ children }) {
  return (
    <h2 
      className="flex-shrink-0"
      style={{
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '18px',
        background: 'linear-gradient(90.1deg, #ED1C24 -2.03%, #005E9E 100.79%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 1,
        margin: 0,
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      {children}
    </h2>
  );
}

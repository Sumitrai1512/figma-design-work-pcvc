export default function StepEllipse({ isActive = false }) {
  return (
    <div 
      style={{
        width: '25px',
        height: '25px',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: isActive ? '#ED1C24' : '#A4B6DA',
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        opacity: 1
      }}
    />
  );
}

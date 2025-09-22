export default function NonAssistedBadge() {
  return (
    <div 
      className="flex items-center justify-center rounded-[8px] flex-shrink-0"
      style={{
        width: '98px',
        height: '24px',
        backgroundColor: '#D1EDFF',
        padding: '4px 12px',
        opacity: 1
      }}
    >
      <span 
        className="whitespace-nowrap text-center"
        style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '16px',
          color: '#00538A',
          opacity: 1
        }}
      >
        Non Assisted
      </span>
    </div>
  );
}

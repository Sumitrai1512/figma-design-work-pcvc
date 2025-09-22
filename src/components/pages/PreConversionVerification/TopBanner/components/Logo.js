import Image from 'next/image';

export default function Logo() {
  return (
    <Image 
      src="/logo.svg" 
      alt="HDFC Life Logo" 
      width={44} 
      height={29}
      priority={true} // Add priority since logo is above the fold
      className="absolute top-4 right-4"
      style={{ 
        opacity: 1,
        width: '44px', // Fixed width  
        height: 'auto' // Auto height to maintain aspect ratio
      }}
    />
  );
}

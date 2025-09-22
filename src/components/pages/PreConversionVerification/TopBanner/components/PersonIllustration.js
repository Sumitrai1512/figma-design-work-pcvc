import Image from 'next/image';

export default function PersonIllustration() {
  return (
    <div className="absolute bottom-0 right-0">
      <Image 
        src="/image.svg" 
        alt="Verification Illustration" 
        width={100} 
        height={120}
        priority={true} // Add priority since image is above the fold (LCP)
        style={{ 
          opacity: 1,
          width: '100px', // Fixed width
          height: 'auto' // Auto height to maintain aspect ratio
        }}
      />
    </div>
  );
}

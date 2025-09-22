'use client';

import SecondaryButton from './components/SecondaryButton';
import PrimaryButton from './components/PrimaryButton';

export default function BottomButtons() {
  const handleDisagree = () => {
    console.log('Disagree clicked');
    // Add your disagree logic here
  };

  const handleAgree = () => {
    console.log('Agree clicked');
    // Add your agree logic here
    // On click: Open overlay: "Bottom Sheet"; Animate: Move in Bottom;
    // animation-timing-function: ease-out; animation-duration: 300ms;
  };

  return (
    <div
      style={{
        // Layout
        width: '100%', // Full width of parent container
        maxWidth: '410px', // Match the main container width
        height: '70px',
        position: 'fixed', // Fixed scroll position
        bottom: '0px', // Stick to bottom of viewport
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)', // Center the component
        paddingTop: '15px',
        paddingRight: '0px', // Remove right padding to align with main page
        paddingBottom: '15px',
        paddingLeft: '0px', // Remove left padding to align with main page
        gap: '10px',
        opacity: 1,
        
        // Colors
        backgroundColor: '#FFFFFF', // var(--Color-Base-white, #FFFFFF)
        
        // Shadows and blurs
        boxShadow: '0px 0px 6px 0px #00000026',
        
        // Enhanced fixed positioning
        zIndex: 9999, // Increased z-index to ensure it stays on top
        willChange: 'transform', // Optimize for transform changes
        backfaceVisibility: 'hidden', // Prevent flickering during scroll
        WebkitBackfaceVisibility: 'hidden', // Safari support
        transform3d: 'translate3d(0, 0, 0)', // Force hardware acceleration
        WebkitTransform: 'translateX(-50%) translateZ(0)' // Enhanced positioning with GPU acceleration
      }}
    >
      {/* Inner frame containing buttons */}
      <div
        style={{
          // Layout
          width: '353px',
          height: '40px',
          gap: '8px',
          opacity: 1,
          
          // Spacing from outer frame:
          // top and bottom: 15px (already handled by outer frame padding)
          marginLeft: '20px', // Add left margin to maintain button spacing
          marginRight: '17px', // Add right margin (353px + 20px left + 17px right = 390px total)
          
          // Center the buttons
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Button - Disagree */}
        <SecondaryButton onClick={handleDisagree}>
          Disagree
        </SecondaryButton>
        
        {/* Right Button - Agree */}
        <PrimaryButton onClick={handleAgree}>
          Agree
        </PrimaryButton>
      </div>
    </div>
  );
}

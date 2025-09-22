import Logo from './components/Logo';
import TextFrame from './components/TextFrame';
import PersonIllustration from './components/PersonIllustration';

export default function TopBanner() {
  return (
    <div 
      className="relative bg-white border border-[#C9D3E9] rounded-[12px] w-full"
      style={{
        height: '141px',
        opacity: 1,
        maxWidth: '347px' // iPhone 14 width
      }}
    >
      <Logo />
      
      {/* Main content - flex container */}
      <div className="flex h-full p-4 pt-6">
        <TextFrame />
        
        {/* 12px gap */}
        <div style={{ width: '12px' }}></div>
        
        {/* Spacer to push image to right edge */}
        <div className="flex-grow"></div>
      </div>
      
      <PersonIllustration />
    </div>
  );
}

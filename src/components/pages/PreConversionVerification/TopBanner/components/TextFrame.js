import NonAssistedBadge from './NonAssistedBadge';
import GradientTitle from './GradientTitle';
import DescriptionText from './DescriptionText';

export default function TextFrame() {
  return (
    <div 
      className="flex flex-col justify-start"
      style={{
        width: '197px',
        height: '96px',
        gap: '6px',
        opacity: 1
      }}
    >
      <NonAssistedBadge />
      
      <GradientTitle>
        Pre Conversion Verification
      </GradientTitle>
      
      <DescriptionText>
        Verify your application in<br />minutes
      </DescriptionText>
    </div>
  );
}

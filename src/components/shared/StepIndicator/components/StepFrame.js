import StepEllipse from './StepEllipse';
import StepText from './StepText';

export default function StepFrame({ text, isActive = false, width, textWidth }) {
  return (
    <div 
      className="flex items-center"
      style={{
        width: width,
        height: '43px',
        gap: '7px',
        opacity: 1
      }}
    >
      {/* Ellipse */}
      <div>
        <StepEllipse isActive={isActive} />
      </div>
      
      {/* Text */}
      <div>
        <StepText isActive={isActive} width={textWidth}>
          {text}
        </StepText>
      </div>
    </div>
  );
}

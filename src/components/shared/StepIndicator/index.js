import StepFrame from './components/StepFrame';
import StepDash from './components/StepDash';

export default function StepIndicator() {
  return (
    <div 
      className="flex items-center relative"
      style={{
        width: '390px', // iPhone 14 width
        height: '43px',
        gap: '0px', // Remove gap to control spacing manually
        opacity: 1,
        marginTop: '24px',
        marginLeft: '0.2px', // Earlier was 20px, changed to 0.2px to align with design
        overflow: 'hidden',
        //border: '1px solid #E1E9F6',
      }}
    >
      {/* Step 1 - Verify Details (Active) */}
      <StepFrame 
        text="Verify Details" 
        isActive={true} 
        width="77px" 
        textWidth="45px"
      />
      
      {/* Dash 1 */}
      <div style={{ marginLeft: '6px', marginRight: '6px' }}>
        <StepDash />
      </div>
      
      {/* Step 2 - Customer Details */}
      <StepFrame 
        text="Customer Details" 
        isActive={false} 
        width="97px" 
        textWidth="74px"
      />
      
      {/* Dash 2 */}
      <div style={{ marginLeft: '6px', marginRight: '6px' }}>
        <StepDash />
      </div>
      
      {/* Step 3 - Policy Details */}
      <StepFrame 
        text="Policy Details" 
        isActive={false} 
        width="97px" 
        textWidth="74px"
      />
      
      {/* Dash 3 */}
      <div style={{ marginLeft: '6px', marginRight: '6px' }}>
        <StepDash />
      </div>
      
      {/* Step 4 - Partially visible (half ellipse shows) */}
      <div style={{ width: '12px', overflow: 'hidden' }}>
        <StepFrame 
          text="Empty" 
          isActive={false} 
          width="97px" 
          textWidth="74px"
        />
      </div>
    </div>
  );
}

import TopBanner from './TopBanner';
import StepIndicator from '../../shared/StepIndicator';
import FormSection from './FormSection';
import BottomButtons from '../../shared/BottomButtons';

export default function PreConversionVerification() {
  return (
    <div 
      style={{
        width: '390px',
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        margin: '0 auto',
        position: 'relative',
        paddingBottom: '90px', // Add space for fixed bottom buttons (70px height + 20px extra)
        overflowX: 'hidden', // Prevent horizontal scrolling
        WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
      }}
    >
      <TopBanner />
      <StepIndicator />
      <FormSection />
      <BottomButtons />
    </div>
  );
}

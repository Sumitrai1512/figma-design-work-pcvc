import PreConversionVerificationPage from '../components/pages/PreConversionVerification';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div 
        className="w-full"
        style={{
          paddingTop: '20px',
          paddingLeft: '22px',
          paddingRight: '21px'
        }}
      >
        <PreConversionVerificationPage />
      </div>
    </main>
  )
}
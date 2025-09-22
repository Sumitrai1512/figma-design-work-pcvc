import './globals.css'

export const metadata = {
  title: 'HDFC Life - Pre Conversion Verification',
  description: 'Verify your application in minutes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
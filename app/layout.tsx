import Footer from './footer'
import './globals.css'
import Header from './header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head >
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// the tailwind cdn is a temporary workaround!!! it will be removed in the future
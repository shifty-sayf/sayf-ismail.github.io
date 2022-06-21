import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='flex flex-col h-full'>      
    <header className='flex-none bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-gray-100 font-bold w-full'>
      <nav className='flex'>
        <ul className="flex-1 text-2xl font-bold py-3 px-12 justify-start">
          <li>Sayf Ismail</li>
        </ul>

        <ul className='flex flex-1 justify-end gap-12 py-5 px-12 text-grey'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>Blog</li>
          <li><a href="/pdf/01_Resume_Sayf_Ismail.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>
    </header>
    <div className='flex'>
     <Component {...pageProps}/>
    </div>
    <footer className='flex-none w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-8 text-gray-100 font-bold'>
      <ul className='flex flex-1 justify-center gap-20'>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Blog</li>
          <li>Contact Me</li>
      </ul>
    </footer>
    <section className='flex-none w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-8 text-gray-100 mt-0 mx-auto text-center'>
    © 2022 Sayf Ismail. All rights reserved.
    </section>
  </div>
  )
}

export default MyApp

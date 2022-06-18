import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>      
    <header className='bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-gray-100 font-bold w-full'>
      <nav className='flex'>
        <ul className="flex-1 text-2xl font-bold py-3 px-12 justify-start">
          <li>Sayf Ismail</li>
        </ul>

        <ul className='flex flex-1 justify-end gap-12 py-5 px-12 text-grey'>
          <li>Home</li>
          <li><Link href="/about">About</Link></li>
          <li>Blog</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
    {/* <div className='bg-[url("/static/background.png")] bg-no-repeat bg-cover'> */}
     <Component {...pageProps}/>
    {/* </div> */}
    <footer className='fixed bottom-0 w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-8 text-gray-100 font-bold'>
      <ul className='flex flex-1 justify-center gap-20'>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Blog</li>
          <li>Contact Me</li>
      </ul>
  </footer>
</>
}

export default MyApp

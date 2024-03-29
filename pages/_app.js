import Link from 'next/link'
import { TerminalContextProvider } from 'react-terminal'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col w-full h-full'>      
      <header className='flex-none bg-gradient-to-r from-slate-200 to-gray-50 text-stone-700 font-bold w-full shadow-md '>
        <nav className='flex'>
          <ul className="flex-auto text-2xl font-bold py-3 pl-12 justify-start mb-8">
            <a href=""><li className='hover:text-yellow-500'>Sayf Ismail</li></a>
          </ul>

          <ul className='hidden space-x-8 sm:flex justify-between gap-12 py-5 px-12 text-grey'>
            <li><Link href="/about">About</Link></li>
            <li>Blog</li>
            <li><a href="https://drive.google.com/file/d/1sYphYht7gNwCBBYx4LW9E8d8D-PcXcH_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
          <div className="sm:hidden space-y-2 m-auto pr-12">
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
          </div>
        </nav>
      </header>
      <div className='my-8 justify-center items-center flex-none h-auto min-h-full'>
      <TerminalContextProvider>
        <Component {...pageProps}/>
      </TerminalContextProvider>
      </div>
      <footer className='text-center bottom-0 flex-none w-full bg-gradient-to-r from-slate-200 to-gray-50 py-8 text-stone-700 font-bold'>
        <ul className='flex space-y-2 flex-col md:flex-row justify-center gap-1 md:gap-20'>
            <li><a href="https://github.com/sayf-ismail" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/sayf-ismail/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href="https://twitter.com/Sayfs0" target="_blank" rel="noreferrer">Twitter</a></li>
            <li>Blog</li>
            <li><a href="mailto:sayfti@gmail.com">Contact Me</a></li>
        </ul>
        <section className='flex-none w-full bg-gradient-to-r from-slate-200 to-gray-50 py-8 text-stone-700 mt-0 mx-auto text-center'>
        © 2022 Sayf Ismail. Built with Next.js, Tailwind and Vercel.
        </section>
      </footer>
      </div>
  )
}

export default MyApp

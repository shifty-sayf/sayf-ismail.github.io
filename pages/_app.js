import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>      
    <header>
      <nav className='flex flex-1 bg-purple-300'>
        <ul className="text-2xl font-bold py-3 px-12 justify-start">
          <li>Sayf Ismail</li>
        </ul>

        <ul className='flex flex-1 justify-end gap-12 py-5 px-12 text-grey'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
    <Component {...pageProps}/>
    <footer className='relative bottom-0 bg-purple-300 py-8'>
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

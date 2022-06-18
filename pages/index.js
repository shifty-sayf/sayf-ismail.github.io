import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
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
      <body>
        <main className='bg-blue-300 items-center'>
          <div className='flex flex-wrap justify-center gap-1'>
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={700}
              height={500} 
            />
          </div>
        </main>
      </body>
      <footer className='relative bottom-0 bg-purple-300 py-8'>
        <ul className='flex flex-1 justify-center gap-20'>
            <li>Linkedin</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Blog</li>
            <li>Contact Me</li>
        </ul>
      </footer>
    </div>
  )
}

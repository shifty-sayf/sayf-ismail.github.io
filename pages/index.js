import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
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
    </div>
  )
}

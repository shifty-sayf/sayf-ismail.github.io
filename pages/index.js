import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
      <body>
        <main className='pb-20 items-center sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center gap-1 max-w-7xl'>
            <Image
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
            <Image 
              src="/GoodTomato.png"         alt="Picture of the author"
              width={400}
              height={400} 
              className="sm:mt-10"
            />
          </div>
        </main>
      </body>
    </div>
  )
}

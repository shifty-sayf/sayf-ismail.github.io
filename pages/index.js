import Image from 'next/image'

export default function Home() {
  return (
    // <main className='items-center sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 w-full'>
    <main className=' items-center'>
      <div className='grid grid-cols-1 auto-cols-auto sm:grid-cols-2 md:grid-cols-3 justify-center gap-0 items-center p-0 m-0'>
        
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="/" className=''>
                <Image 
                  src="/static/dome.jpg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="/" className=''>
                <Image 
                  src="/static/caterpillar.jpeg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="/" className=''>
                <Image 
                  src="/static/butterfly_park.jpeg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="mailto:sayfti@gmail.com" className=''>
                <Image 
                  src="/static/hill.jpeg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="/" className=''>
                <Image 
                  src="/static/shop_fish.jpeg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
          <div className='bg-gray-500'>
            <div className='btn items-center rounded-md shadow-lg mix-blend-overlay'>
              <a href="mailto:sayfti@gmail.com" className=''>
                <Image 
                  src="/static/btfly.jpg"         alt="Booterfly!"
                  width={"800"}
                  height={"800"} 
                  objectFit="cover"          
                  className='rounded-xl'
                />
              </a>
            </div>
          </div>
        </div>
    </main>
  )
}

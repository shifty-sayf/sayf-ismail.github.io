import Image from 'next/image';
import Link from 'next/link';

const prefix = '/projects';

export default function Home() {
  return (
    // <main className='items-center sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 w-full'>
    <main className=' items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 sm:gap-0 md:gap-1 lg:gap-1 items-center p-0 m-0 max-w-7xl mx-auto'>
      
        <div className='bg-green-900 relative'>
          <p className='absolute left-4 text-4xl justify-center text-white '>ABOUT ME Terminal</p>
          <div className='btn items-center mix-blend-overlay  '>
            <p className='bg-stone-50 absolute z-10 h-full w-full mt-20 opacity-0 focus:opacity-100 hover:opacity-100 text-black font justify-center mix-blend-normal indent-4'>Get started by typing into the prompt to learn more!  </p>
            <p>
              {/* <br />
              <a className='bg-black hover:underline text-blue-50 ' href=''> APP </a> */}
            </p>
            <Image 
              src="/projects/static/dome.jpg"         alt="Booterfly!"
              width={"800"}
              height={"800"} 
              objectFit="cover"          
              className=''
              />
          </div>
        </div>
        <Link href="https://whitelist-dapp-two-iota.vercel.app/">
          <a target="_blank" className='h-0 w-0 '>
            <div className='bg-gray-800 relative'>
              <p className='absolute left-4 text-4xl justify-center text-white '>Whitelist DApp</p>
              <div className='btn items-center mix-blend-overlay hover:blur-sm'>
                  <Image 
                    src="/projects/static/caterpillar.jpeg"         alt="Booterfly!"
                    width={"800"}
                    height={"800"} 
                    objectFit="cover"          
                    className=''
                    />
              </div>
            </div>
          </a>
        </Link>
        <div className='bg-gray-700 relative'>
          <p className='absolute left-4 text-4xl justify-center text-white '>PROJECT: 3</p>
          <div className='btn items-center mix-blend-overlay hover:blur-sm'>
            <a href="" className=''>
              <Image 
                src="/projects/static/butterfly_park.jpeg"         alt="Booterfly!"
                width={"800"}
                height={"800"} 
                objectFit="cover"          
                className=''
              />
            </a>
          </div>
        </div>
        <div className='bg-gray-700 relative'>
          <p className='absolute left-4 text-4xl justify-center text-white '>PROJECT: 4</p>
          <div className='btn items-center mix-blend-overlay hover:blur-sm'>
            <a href="mailto:sayfti@gmail.com" className=''>
              <Image 
                src="/projects/static/hill.jpeg"         alt="Booterfly!"
                width={"800"}
                height={"800"} 
                objectFit="cover"          
                className=''
              />
            </a>
          </div>
        </div>
        <div className='bg-gray-600 relative'>
          <p className='absolute left-4 text-4xl justify-center text-white '>PROJECT: 5</p>
          <div className='btn items-center mix-blend-overlay hover:blur-sm'>
            <a href="" className=''>
              <Image 
                src="/projects/static/shop_fish.jpeg"         alt="Booterfly!"
                width={"800"}
                height={"800"} 
                objectFit="cover"          
                className=''
              />
            </a>
          </div>
        </div>
        <div className='bg-gray-700 relative'>
          <p className='absolute left-4 text-4xl justify-center text-white '>CONTACT ME</p>
          <div className='btn items-center rounded-md mix-blend-overlay hover:blur-sm'>
            <a href="mailto:sayfti@gmail.com" className=''>
              <Image 
                src="/projects/static/btfly.jpg"         alt="Booterfly!"
                width={"800"}
                height={"800"} 
                objectFit="none"          
                className=''
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

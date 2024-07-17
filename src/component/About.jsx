
export default function About() {
  return (
    <div className='bg-slate-300 flex-col  text-center justify-center min-h-screen px-8'>
      <h1 className='text-3xl font-bold mb-4 pt-2' >About Build & Fix Depot Hardware</h1>
      <div className='max-w-3xl text-center'>
      <p className='mb-4 text-center'>
      Welcome to Build & Fix Depot Hardware, your one-stop shop for all your building and repair needs. Whether you're a professional contractor or a DIY enthusiast, we've got you covered with a comprehensive range of tools, materials, and accessories. Our mission is to provide high-quality products at competitive prices, ensuring you have everything you need to get the job done right.
      </p>
      <div className='text-center'>
      <h1 className='text-2xl font-bold mb-2'>Why Choose Us?</h1>
      <ul className='list-disc list-inside'>
        <li className='mb-2'>
        Wide Selection: From power tools to plumbing supplies, we offer a vast inventory of products to suit every project.
        </li>
        <li className='mb-2'>
        Expert Advice: Our knowledgeable staff is always on hand to offer guidance and support, helping you make informed decisions.
        </li>
        <li className='mb-2'>
        Quality Products: We stock only the best brands in the industry, ensuring you receive reliable and durable equipment.
        </li>
        <li className='mb-2'>
        Convenient Shopping: Shop online or visit our store to experience a seamless shopping experience with quick and easy checkout.
        </li>
      </ul>
      </div>
      <div className='mt-4 text-center'>
      <h1  className='text-2xl font-bold mb-2'>Our Commitment</h1>
      <p>
        At Build & Fix Depot Hardware, we are committed to providing exceptional customer service and support. We strive to build lasting relationships with our customers, fostering a community of builders and fixers who trust us for their hardware needs. <br/>
       <p className='mt-2'> Thank you for choosing Build & Fix Depot Hardware. Let's build and fix together!</p>
      </p>
      </div>
      <div className='mt-6'>
          <a href='/products' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Explore Our Products
          </a>
        </div>
      </div>
    </div>
  )
}

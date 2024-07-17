import { useCart } from "react-use-cart";

export default function Home() {
  const products=[
    {
      name:"Hammer",
      quantity:1,
      id:1,
      description:"A versatile tool used for driving nails, breaking objects apart, and shaping materials. Hammers feature a heavy head attached to a handle, designed for controlled striking and precise force application",
      price:1400,
      img:"https://m.media-amazon.com/images/I/71hZCNai8NL.jpg"
    },
    {
      name:"nails",
      quantity:1,
      id:2,
      description:"Essential fasteners for securing materials in construction and carpentry. Nails come in various sizes and types, providing reliable grip and strength for a wide range of applications.",
      price:300,
      img:"https://m.media-amazon.com/images/I/81GjDGTNKEL.jpg"
    },
    {
      name:"Cement",
      quantity:1,
      id:3,
      description:"The cornerstone of sturdy construction. Formulated for strength and resilience, cement is a vital building material that binds aggregates to create solid foundations, structures, and surfaces. Trusted for its durability and versatility, it's the foundation of every enduring project.",
      price:"900",
      img:"https://bsmedia.business-standard.com/_media/bs/img/article/2020-02/21/full/1582305251-395.jpg?im=FeatureCrop,size=(826,465)"
    },
    {
      name:"paint",
      quantity:1,
      id:4,
      description:"A liquid coating applied to surfaces for decoration, protection, and enhancement. Available in numerous colors and finishes, paints provide aesthetic appeal while safeguarding against wear, weather, and corrosion.",
      price:1200,
      img:"https://i.roamcdn.net/hz/pi/listing-thumb-543w/b9fe52d97f60268c3d8f79d9a80c4329/-/horizon-files-prod/pi/picture/qq4dmep4/9513e8b3a982bc0b7f3122dbac199909a3098704.jpg"
    },
    {
      name:"Pipes",
      quantity:1,
      id:5,
      description:"Essential conduits for transporting liquids, gases, and solids in various industries and applications. Designed for durability and efficiency, our pipes ensure reliable flow and structural integrity, supporting everything from residential plumbing to industrial infrastructure projects.",
      price:1000,
      img:"https://supremepipe.com/wp-content/uploads/2020/09/The-Process-of-Creating-ERW-Steel-Pipes.jpg"
    },
    {
      name:"Motor Oil",
      quantity:1,
      id:6,
      description:"Engineered for optimal performance and protection, our motor oils are formulated to lubricate engines, reduce friction, and extend engine life. Trusted by drivers and professionals alike, our oils deliver superior reliability and efficiency, ensuring smooth operation and peak performance for your vehicles.",
      price:5350,
      img:"https://www.shutterstock.com/shutterstock/photos/1836360535/display_1500/stock-photo-motor-oil-on-display-at-a-mechanic-shop-karachi-pakistan-oct-1836360535.jpg"
    },
    {
      name:"Electrical Wire",
      quantity:1,
      id:7,
      description:"The lifeline of modern electrical systems, our wires are crafted for safety, reliability, and efficiency. Designed to transmit electricity with minimal resistance, our wires meet industry standards for durability and performance, ensuring secure connections and uninterrupted power flow in homes, businesses, and industrial settings.",
      price:13500,
      img:"https://pictures-kenya.jijistatic.com/51716013_NjIwLTQ2NS0wZDc0YzFlNmU4.webp"
    },
    {
      name:"Paint Brush",
      quantity:1,
      id:8,
      description:"The essential tool for precision and creativity, our paint brushes are crafted with high-quality bristles and ergonomic handles for comfortable use. Whether for fine detailing or broad strokes, our brushes ensure smooth application and even coverage, helping you achieve professional-quality finishes with every stroke.",
      price:1500,
      img:"https://www.kentblaxill.co.uk/media/magefan_blog/thumbnail-brushes.jpg"
    },
    {
      name:"Power Tool Accessories",
      quantity:1,
      id:9,
      description:"Enhance the versatility and performance of your power tools with our comprehensive range of accessories. From drill bits to saw blades and sanding discs, our accessories are engineered for durability and precision, ensuring efficient operation and superior results across various tasks and materials. Elevate your craftsmanship with [Your Brand Name] power tool accessories",
      price:8300,
      img:"https://m.media-amazon.com/images/I/7167J4Ff-WL._AC_SL1500_.jpg"
    },
  ]
  const{addItem, inCart}= useCart()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center pt-5 cursor-default ">
      {products.map((item) =>(
        <div key={item.id} className="bg-black max-w-[400px] rounded-lg p-4">
          <section>
            <img src={item.img} alt="" className="w-full h-52 object-cover hover:object-contain rounded-t-lg cursor-grab" />
          </section>
          <section className="text-green-400  text-2xl font-sans text-center uppercase pt-1">
            <p>{item.name}</p>
          </section>
          <section className=" text-red-600 font-serif">
            {item.description}
          </section>
          <section className=" p-0.5">
           <p className=" text-blue-600 font-serif text-xl">ksh{item.price}/=</p>
           {
            inCart(item.id)?
            <button className="mx-32 border-green-600 border-2 rounded-2xl font-sans px-4 py-2 bg-blue-800 text-white  cursor-not-allowed" onClick={()=>addItem(item)} disabled={inCart(item.id)} >Add to cart</button>
            :
            <button  className="mx-32 border-green-600 border-2 rounded-2xl font-sans px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700" onClick={()=>addItem(item)}>Add to Cart</button>
           }
          </section>
         
        </div>
      ))}

    </div>
  )
}
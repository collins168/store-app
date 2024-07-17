import{ NavLink, useLocation } from "react-router-dom"
import{ FaBars, FaCartPlus, FaTimes } from "react-icons/fa"
import { useState } from "react"
export default function Navbar() {
  const menuItems=[
    {
      name:'Home',
      path:"*",
    },
    {
      name:'About',
      path:"/about",
    },
    {
      name:<FaCartPlus  size={24}/>,
      path:"/cart",
    },
  ]
  const location= useLocation()
  const[isOpen, setIsOpen]=useState(false)
  const menuButton=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-black p-6 sticky top-0 z-50">
      <div className=" flex">
       <section>
        <p className="logo text-green-500  text-2xl sm:text-3xl md:text-4xl font-serif uppercase cursor-pointer">Build & Fix Depot</p>
       </section>
       <section className="md:flex mx-auto space-x-3 hidden font-mono">
        {menuItems.map((item)=>(
          <div key={item.path}>
            <NavLink
            to={item.path}
           className={`${location.pathname===item.path? "underline text-blue-600  text-xl":"text-lg text-green-500 hover:italic hover:underline hover:text-purple-700"}` }
            >
              {item.name}
            </NavLink>
          </div>
        ))}
       </section>
       <section className="text-white ml-auto block md:hidden">
        <button onClick={menuButton}>
          {
            isOpen ?
            <FaTimes  size={25}/>
            :
            <FaBars size={25}/>
          }
        </button>
       </section>
      </div>
      <div>
        <section className="mt-4 md:hidden">
          {
            isOpen &&(
              <div className="grid">
                {
                  menuItems.map((items)=>(
                    <NavLink
                    key={items.path}
                  to={items.path}
                className={`${location.pathname===items.path? "underline text-blue-600  text-xl":"text-lg text-green-500 hover:italic hover:underline hover:text-purple-700"}` }
                  >
                    {items.name}
                  </NavLink>
                  ))
                }
              </div>
            )
          }
        </section>
      </div>

    </div>
  )
}

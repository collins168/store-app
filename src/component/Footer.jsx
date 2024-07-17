import React from 'react'
import{ FaFacebook, FaInstagram, FaTwitter, FaWhatsapp }from"react-icons/fa"

export default function Footer() {
    const items =[
        {
            name:"Facebook",
            icon:FaFacebook,
            link:"#"
        },
        {
            name:"Instagram",
            icon:FaInstagram,
            link:"#"
        },
        {
            name:"WhatsApp",
            icon:FaWhatsapp,
            link:"#"
        },
        {
            name:"Twitter",
            icon:FaTwitter,
             link:"#"

        }
    ]
  return (
    <div className='w-full bg-gray-800 text-gray-200 py-8 mt-4 border-2 rounded-3xl'>
        <div className='container mx-auto px-4'>
        <h1  className='text-center text-2xl font-semibold mb-6'> For more information </h1>
        <div className='flex justify-center space-x-6'>
            {items.map((item)=>(
                <a key={item} href={item.link} target='#' rel='#'  className='text-gray-500 hover:text-white p-2'>
                    <item.icon className='w-8 h-8' />
                </a>
            ))}
        </div>
        <p className="text-center">&copy; 2024 BUILD & FIX DEPOT. All rights reserved.</p>
        </div>
    </div>
  )
}



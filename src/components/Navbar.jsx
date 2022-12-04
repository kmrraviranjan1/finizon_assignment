import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { images } from '../constants'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [responsiveNav, setResponsiveNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'marketPlace',
      title: "Marketlace"
    },
    {
      id: 2,
      link: 'ranking',
      title: 'Rankings'
    },
    {
      id: 3,
      link: 'creators',
      title: 'Connect a wallet'
    }
  ]

  return (
    <nav className="h-20 bg-black">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50" >

        <img src={images.navLogo} alt="logo" />
  
        <ul className="hidden lg:flex">
          {
            links.map(({ id, link, title }) => (
              <li key={id} className="capitalize px-4 py-2 cursor-pointer font-medium hover:scale-105 duration-200" >
                <Link to={link} smooth duration={500} >{title}</Link>
              </li>
            ))
          }

          <li className="flex justify-center items-center bg-fuchsia-500 p-2 rounded-md">
            <img src={images.navBtnUser} alt="signup_user" />
            <Link to="signup" className="mx-2">Sign Up</Link>
          </li>
        </ul>

        <div onClick={() => { setResponsiveNav(!responsiveNav) }} className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden ">
          {responsiveNav ? <FaTimes size={30} /> : <img src={images.navBurger} alt="nav_more" />}
        </div>

        {
          responsiveNav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black z-5" >
              {
                links.map(({ id, link, title }) => (
                  <li key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl" >
                    <Link to={link} smooth duration={500} onClick={() => (setResponsiveNav(!responsiveNav))}>{title}</Link>
                  </li>
                ))
              }

              <li className="flex justify-center items-center bg-fuchsia-500 px-4 py-4 my-2 rounded-md">
                <img src={images.navBtnUser} alt="signup_user" />
                <Link to="signup" className="mx-2" smooth duration={500} onClick={() => (setResponsiveNav(!responsiveNav))}>Sign Up</Link>
              </li>
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
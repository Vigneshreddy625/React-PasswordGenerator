import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="max-w-screen-xxl bg-gray-800 mx-auto ">
    <div className=" flex flex-wrap items-center justify-between max-w-xxl mx-4 p-2">
      <span className=" mx-4 font-serif font-semibold px-2 py-4 dark:text-white ">
        VMart
      </span>

      <div className=" max-w-lg flex flex-wrap justify-between mr-10 px-3">
        <a
          href="#"
          className="dark: text-white p-2 m-2 gap-1 hover:text-blue-500"
        >
          HOME
        </a>
        <a
          href="#"
          className="dark: text-white p-2 m-2 gap-1 hover:text-blue-500"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="dark: text-white p-2 m-2 gap-1 hover:text-blue-500"
        >
          SERVICES
        </a>
        <a
          href="#"
          className="dark: text-white p-2 m-2 gap-1 hover:text-blue-500"
        >
          CONTACT
        </a>
      </div>
    </div>
  </nav>
  <br />
  </>
  )
}

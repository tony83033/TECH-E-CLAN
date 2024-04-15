import { link } from 'fs'
import React from 'react'
import {MovingBorderDemo} from './MovingBorder'
const Navbar = () => {
    const data =[
        {
            id:"1",
            name:"HOME",
            link:"#",
        },
        {
          id:"2",
            name:"ABOUT",
            link:"#",
        },
        {
            id:"3",
            name:"SPONSORS",
            link:"#"
        },{
          id:"4",
            name:"SCHEDULE",
            link:"#"
        },{
          id:"5",
            name:"TEAM",
            link:"#"
        }


    ]
  return (
    <>
  {/* Main navigation container */}
  <nav
    className="relative flex w-full bg-[#030303] mx-auto flex-nowrap items-center justify-between  py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 rounded-3xl"
    data-twe-navbar-ref=""
  >
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      {/* Hamburger button for mobile view */}
      <button
        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-twe-collapse-init=""
        data-twe-target="#navbarSupportedContent8"
        aria-controls="navbarSupportedContent8"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* Hamburger icon */}
        <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {/* Collapsible navbar container */}
      <div
        className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent8"
        data-twe-collapse-item=""
      >
        {/* Left links */}
        <ul
          className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
          data-twe-navbar-nav-ref=""
        >
          {/* Home link */}
          {data.map((item)=>(
               <li key={item.id}
               className="my-4 text-1xl ps-2 lg:my-0 lg:pe-1 lg:ps-2"
               data-twe-nav-item-ref=""
             >
               <a
                 className="text-white dark:text-white lg:px-2"
                 aria-current="page"
                 href="#"
                 data-twe-nav-link-ref=""
               >
                 {item.name}
               </a>
               {/* <MovingBorderDemo name={item.name}/> */}
             </li>
          ))}
         
         {/* <li
               className="my-4 text-1xl ps-2 lg:my-0 lg:pe-1 lg:ps-2"
               data-twe-nav-item-ref=""
             >
              
              <MovingBorderDemo name="rigister"/> 
             </li>
         */}
         
        </ul>
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar
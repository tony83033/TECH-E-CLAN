import React from 'react'
import Link from 'next/link'
const Sponsors = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We're grateful for the support of our sponsors.
        </p>
      </div>
      <div className="flex justify-center items-start space-x-4">
        <a target="_blank"
          className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="https://skillforge.in/"
        >
          Visit Our Sponsor
        </a>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-6 lg:grid-cols-4 lg:gap-12">
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/skillLogo.png"
            width="140"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/skillLogo.png"
            width="140"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/skillLogo.png"
            width="140"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/skillLogo.png"
            width="140"
          />
        </div>
      </div>
    </div>
  </section>

  )
}

export default Sponsors
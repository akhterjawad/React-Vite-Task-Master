import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-3 mb-3 gap-3">
        <span
          className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The evolution of 5G technology
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            How 5G is shaping the future of communication and connecting the world like never before.
          </p>
        </span>
        <span className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The rise of AI-powered solutions
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover how AI is transforming industries with innovative, cutting-edge solutions.
          </p>
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center mb-3 gap-3">
        <span className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cloud computing trends to watch in 2022
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Stay ahead with insights into the latest developments in cloud technology for the coming year.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Top cybersecurity strategies for 2023
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore key strategies that will help businesses stay protected against cyber threats.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Innovations in blockchain technology
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Uncover the latest innovations in blockchain and how they're shaping the future of finance.
          </p>
        </span>
      </div>
    </>
  )
}

export default About
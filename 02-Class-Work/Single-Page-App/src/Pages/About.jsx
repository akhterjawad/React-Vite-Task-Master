import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  const [activeTab, setActiveTab] = useState('about'); // State to keep track of active tab
  return (
    <>
      <div className="text-center mt-5 mb-4" bis_skin_checked={1}>
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Future of Tech Innovation
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Discover the latest trends shaping the world of technology, from AI-driven solutions to the rise of blockchain and more.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-3 mb-3 ">
        <span
          className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The evolution of 5G technology
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            How 5G is shaping the future of communication and connecting the world like never before.
          </p>
        </span>
        <span className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The rise of AI-powered solutions
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover how AI is transforming industries with innovative, cutting-edge solutions.
          </p>
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center mb-3 ">
        <span className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cloud computing trends to watch in 2022
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Stay ahead with insights into the latest developments in cloud technology for the coming year.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Top cybersecurity strategies for 2023
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore key strategies that will help businesses stay protected against cyber threats.
          </p>
        </span>

        <span className="block max-w-sm h-[180px] m-2 mt-1 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Innovations in blockchain technology
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Uncover the latest innovations in blockchain and how they're shaping the future of finance.
          </p>
        </span>
      </div>
      <div className=" sm:ml-20 sm:mr-20 m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-white dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab"
          role="tablist"
        >
          <li className="me-2">
            <button
              onClick={() => setActiveTab('about')} // Set active tab on click
              type="button"
              role="tab"
              aria-selected={activeTab === 'about'}
              className={`inline-block p-4 ${activeTab === 'about' ? 'text-blue-600 dark:bg-gray-800' : ''
                } rounded-ss-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-blue-500`}
            >
              About
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab('services')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'services'}
              className={`inline-block p-4 ${activeTab === 'services' ? 'text-blue-600 dark:bg-gray-800' : ''
                } hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Services
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab('statistics')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'statistics'}
              className={`inline-block p-4 ${activeTab === 'statistics' ? 'text-blue-600 dark:bg-gray-800' : ''
                } hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Facts
            </button>
          </li>
        </ul>

        <div id="defaultTabContent">
          {activeTab === 'about' && (
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Powering innovation &amp; trust at 200,000+ companies worldwide
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Empower Developers, IT Ops, and business teams to collaborate at high velocity.
              </p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
              </a>
            </div>
          )}
          {activeTab === 'services' && (
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li className="flex items-center">
                  <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex items-center">
                  <span className="leading-tight">Development workflow</span>
                </li>
                <li className="flex items-center">
                  <span className="leading-tight">Limitless business automation</span>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 'statistics' && (
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About
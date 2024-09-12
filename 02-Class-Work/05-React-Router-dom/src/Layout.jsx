import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Layout = () => {
    return (
        <>
            <Navbar />
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
            <div className="card mt-5 mb-5 ml-5 mr-5">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Layout
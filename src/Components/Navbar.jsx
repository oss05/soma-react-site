import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sistemas">Sistemas</Link>
                    </li>
                    <li>
                        <Link to="/desarrollo">Desarrollo</Link>
                    </li>
                    <li>
                        <Link to="/marketing">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/iot">IOT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

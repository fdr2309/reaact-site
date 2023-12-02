import React from 'react'
import logo from '../../public/logo.png'
import { FaGithub, FaTwitter ,FaLinkedin  } from "react-icons/fa6";

const Navber = () => {
    return (
        <nav>
            <div className="container">
                <div className="flex">
                    <div className="img">

                    <img src={logo} alt="" />
                    </div>

                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Tech Stack</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>

                    <div className="links">
                        <FaGithub size={20} />
                        <FaTwitter size={20}/>
                        <FaLinkedin size={20}/>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navber
import React from 'react'
import banner from '../../public/banner.png'

const Banner = () => {
    return (
        <section id='banner'>
            <div className="container">
                <div className="flex">
                    <div className="left">
                        <h1>Hi 👋,</h1>
                        <h1 className='name'>My name is
                            Pavan MG</h1>
                            <h1>I build things for web</h1>
                    </div>             
                    <div className="right">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
import React from 'react'
import card_item from '../../public/card-item.png'

const Projects = () => {
    return (
        <section id='projects'>
            <div className="container">
                <div className="title">
                    <h1>My Tech Stack</h1>
                    <h2> Technologies I’ve been working with recently</h2>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={card_item} alt="" />

                        <div className="text-area">
                            <h1>Project Tile goes here</h1>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>

                            <h3>Tech stack : HTML , JavaScript, SASS, React</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
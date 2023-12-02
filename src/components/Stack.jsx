import React from 'react'
import html from '../../public/html.svg'
import css from '../../public/css.svg'
import js from '../../public/js.svg'

const Stack = () => {
    return (
        <section id='stack'>
            <div className="container">
                <div className="title">
                    <h1>My Tech Stack</h1>
                    <h2> Technologies I’ve been working with recently</h2>
                </div>

                <div className="flex wrap">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />

                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />

                </div>

            </div>
        </section>
    )
}

export default Stack
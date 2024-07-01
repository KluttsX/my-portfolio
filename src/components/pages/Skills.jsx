import '../styles/Skills.css';
import React from 'react';

import Check from '../assets/verify.png';

const Skills = () => {
    return (
        <section id='skills'>
            <p className="section__text__p1">Explore My</p>
            <h1 className='title'>Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>CSS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>Flutter</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>React Js</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>Git</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title-title">Backend Development</h2>
                        <div className="article-container">
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>C#</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>Java</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>Python</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>ASP.NET Core</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>Firebase</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={Check} alt="icono" className='icon' />
                                <div>
                                    <h3>SQL</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

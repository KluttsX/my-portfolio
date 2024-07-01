import '../styles/Home.css';
import Logo from "../assets/logo.png";
import Github from "../assets/github.png";
import React from 'react';
import { Link } from 'react-scroll';
import { saveAs } from 'file-saver';

const downloadPdf = () => {
    const pdfUrl = 'https://cdn.discordapp.com/attachments/770036405220933662/1256432918675460207/PDF.pdf?ex=6680bfd7&is=667f6e57&hm=8d9c0bc1d5cced0f08d068b3e557226b0cce3b0299b706317a78dad4eff853a6&';
    saveAs(pdfUrl, 'Curriculum.pdf');
};

const Home = () => {
    return (
        <section id='home'>
            <div className="section__pic-container">
                <img src={Logo} alt='logo' />
            </div>
            <div className="section__text">
                <p className='section__text__p1'>Hello I'm</p>
                <h1 className='title'>Eleazar Missael</h1>
                <p className="section__text__p2">FrontEnd Developer</p>
                <div className='btn-container'>
                    <button className='btn btn-color-2' onClick={downloadPdf}>
                        Download CV
                    </button>
                    <Link
                        id='as'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <button className='btn btn-color-1'>
                            Contact Me
                        </button>
                    </Link>
                </div>
                <div id="socials-container">
                    <a target='_blank' rel='noreferrer' href="https://github.com/KluttsX">
                        <img className='icon' src={Github} alt="Github" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

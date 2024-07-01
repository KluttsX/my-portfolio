import '../styles/Footer.css';
import { Component } from 'react';
import { Link } from 'react-scroll';


class Footer extends Component {

    render() {
        return (
            <>
                <footer>
                    <nav className='navfooter'>
                        <div class="nav-links-container-f">
                            <ul class="nav-links-f">
                                <li className='lik'>
                                    <Link
                                        className='active'
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={this.handleClick}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='lik'>
                                    <Link
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={this.handleClick}
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className='lik'>
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={this.handleClick}
                                    >
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <p>Copyright &#169; 2024 Eleazar Missael. All Rights Reserved.</p>
                </footer>
            </>
        );
    }
}

export default Footer;
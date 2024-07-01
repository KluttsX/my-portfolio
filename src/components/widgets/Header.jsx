import '../styles/Header.css';
import { Component } from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-scroll';



class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <>
                <nav>
                    <Link className='logo'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={this.handleClick}>
                        <img src={Logo} alt="Eleazar Logo" />
                    </Link>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
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
                            <li>
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
                            <li>
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
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
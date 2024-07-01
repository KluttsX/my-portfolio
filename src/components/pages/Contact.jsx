import '../styles/Contact.css';
import Logo from '../assets/mail.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {
    var email = 'eleazalmisael309@gmail.com';

    return (
        <section id='contact'>
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={Logo}
                        alt="emails"
                        className='icon' />
                    <p>{email}</p>
                </div>
                <CopyToClipboard text={email}>
                    <div id='btn'
                        onClick={() => alert('¡Correo electrónico copiado al portapapeles!')}
                        className="contact-info-container">
                        <p>Copiar</p>
                    </div>
                </CopyToClipboard>
            </div>
        </section>
    );
}

export default Contact;

import React from 'react';
import '../styles/Contact.css'
import instagramIcon from '../assets/icons/instagram.svg'
import contactLogo from '../assets/HomePreviewImages/Get_In_Touch.PNG'
import EmailSender from "../components/EmailSender";


function Contact() {
    return (
        <main className={'Contact'}>
            <section className="info">
                <h1>Get In Touch</h1>
                <ul>
                    <li onClick={() => {
                        navigator.clipboard.writeText('cwang40@sva.edu')
                            .then(()=> alert('Copied'))
                    }}
                        >cwang40@sva.edu</li>
                    <li onClick={() => {
                        navigator.clipboard.writeText('6466372284')
                            .then(()=> alert('Copied'))
                    }}
                        >6466372284</li>
                    <li className={'instagram-info'}>@wilson.wang520
                        <a className={'instagram-icon'}
                           href="https://www.instagram.com/wilson.wang520/"
                           target={'_blank'} rel="noreferrer">
                            <img src={instagramIcon} alt=""/>
                        </a>
                    </li>
                    <li>
                        <img className={'contact-logo'} src={contactLogo} alt=""/>
                    </li>
                </ul>
            </section>



            <EmailSender/>
        </main>
    );
}

export default Contact;
import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Kamruzzaman</span>
                </h1>
                <h1 className="hero-text">
                    MERN Stack Developer
                </h1>
                <p className="h-sub-text">
                    I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/kmkamruzzaman32/" target='_blank' rel='noreferrer' className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/kamruz-zzaman" target='_blank' rel='noreferrer' className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/kamruz-zaman-16067521b/" target='_blank' rel='noreferrer' className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;

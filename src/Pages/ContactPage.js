import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kamruzzaman%20Kazi%20Vila+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">vehicle gps</a></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+880 1686 6143 04 '} text2={'+880 1707 1721 37'} title={'Phone'} />
                    <ContactItem icon={email} text1={'kamruz.zaman8991'} text2={'@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Narisha,Dohar,Dhaka-1332'} text2={'Bangladesh'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

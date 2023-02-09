import '../Css/contact.css';
import Title from './Title';


function Contact(props) {
  return (
    <>
        <Title title='Contact Us' />
        <div className='contactContainer'>
            <div className='contactImageContainer'>
                <iframe className='contactMapContainer' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4199.92433207258!2d75.70349599571901!3d31.255752176337445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1675880594855!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contactText'>
                <Title title='The Art Shop' />
                <div className='contactDescription'>
                    <div className='contactsLinks'>
                        <a className='contactLinksContainer' href="https://www.linkedin.com/in/saaamyak/" target='_blank' rel="noreferrer"><h4>LinkedIn</h4><i className="fa fa-linkedin contactIcons"></i></a>
                        <a className='contactLinksContainer' href="https://github.com/Saaamyak" target='_blank' rel="noreferrer"><h4>GitHub</h4><i className="fa fa-github contactIcons"></i></a>
                        <a className='contactLinksContainer' href="https://www.instagram.com/saaamyak/" target='_blank' rel="noreferrer"><h4>Instagram</h4><i className="fa fa-instagram contactIcons"></i></a>
                        <a className='contactLinksContainer' href="https://www.facebook.com/saaamyak" target='_blank' rel="noreferrer"><h4>facebook</h4><i className="fa fa-facebook contactIcons"></i></a>
                        <a className='contactLinksContainer' href="https://twitter.com/saaamyak" target='_blank' rel="noreferrer"><h4>Twitter</h4><i className="fa fa-twitter contactIcons"></i></a>
                        <a className='contactLinksContainer' href="tel:+91-95576-57134" target='_blank' rel="noreferrer"><h4>Phone</h4><i className="fa fa-phone contactIcons"></i></a>
                        <a className='contactLinksContainer' href="mailto:samyakgoel5@gmail.com" target='_blank' rel="noreferrer"><h4>Mail</h4><i className="fa fa-envelope contactIcons"></i></a>
                    </div>    
                    <h3 className='contactSubTitle'>Postal Address</h3>            
                    <p>
                        Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India) - 144411
                    </p>
                    <p>
                        Email: <a className='emailWrappper' href="mailto:samyakgoel5@gmail.com" target='_blank' rel="noreferrer">samyakgoel5@gmail.com</a>
                    </p>
                </div>
                <button className='contactButton btn btn-primary' onClick={props.contacttUs}>About Us</button>
            </div>
        </div>
    </>
  );
}

export default Contact;

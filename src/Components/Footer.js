import '../Css/footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <img className='creatorImage' src="/images/sam.jpg" alt="Samyak" />
                    <h3>Designed and developed by</h3>
                    <a className='creatorName' href="https://github.com/Saaamyak" target='_blank' rel="noreferrer"><h2>&copy; Saaamyak</h2> <i className="fa fa-heart"></i></a>
                </div>
                <div className="footer__right">
                    <h3>Connect with me</h3>
                    <div className="footer__right__links">
                        <a href="https://www.linkedin.com/in/saaamyak/" target='_blank' rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Saaamyak" target='_blank' rel="noreferrer"><i className="fa fa-github"></i></a>
                        <a href="https://www.instagram.com/saaamyak/" target='_blank' rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.facebook.com/saaamyak" target='_blank' rel="noreferrer"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/saaamyak" target='_blank' rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    </div>
                    <iframe className='mapContainer' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4199.92433207258!2d75.70349599571901!3d31.255752176337445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1675880594855!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="address">
                        <p>Address: Lovely Professional University, <br />Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India) - 144411</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
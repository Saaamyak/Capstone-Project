import '../Css/about.css';
import Title from './Title';


function About(props) {
  return (
    <>
        <Title title='About Us' />
        <div className='aboutContainer'>
            <div className='aboutImageContainer'>
                <img className='aboutImage' src='/images/about.jpg' alt='About Us' />
            </div>
            <div className='aboutText'>
                <Title title='The Art Shop' />
                <p className='aboutDescription'>
                    We are a group of art lovers who want to promote art and artists. We provide a platform for artists to showcase their talent and sell their art pieces. We also provide a platform for street artists to sell their art pieces. We have a large collection of paintings, sculptures, and other art pieces. We provide you with the best art pieces from famous artists. We have a large collection of ancient art pieces. Decorate your room with quality collection of abstract art pieces. We provide you the original art pieces from the artists, which describes their talent & hard work. We provide you with the best art pieces from famous artists. We have a large collection of ancient art pieces. Decorate your room with quality collection of abstract art pieces. We provide you the original art pieces from the artists, which describes their talent & hard work. 
                </p>
                <button className='aboutButton btn btn-primary' onClick={props.contactUs}>Contact US</button>
            </div>
        </div>
    </>
  );
}

export default About;

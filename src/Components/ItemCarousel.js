import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/carousel.css';
const ItemCarouselData = [
  {
    id: 1,
    image: '/images/1.jpg',
    title: 'Select your favorite from millions',
    description: 'We have a large collection of paintings, sculptures, and other art pieces'
  },
  {
    id: 2,
    image: '/images/2.jpg',
    title: 'Buy your favorite art piece, from Famous Artists',
    description: 'We provide you with the best art pieces from famous artists'
  },
  {
    id: 3,
    image: '/images/3.jpg',
    title: 'Promote street artists',
    description: 'We provide a platform for street artists to showcase their talent. You can buy their art pieces to support them'
  },
  {
    id: 4,
    image: '/images/4.jpg',
    title: 'Buy ancient art pieces',
    description: 'We have a large collection of ancient art pieces'
  },
  {
    id: 5,
    image: '/images/5.jpg',
    title: 'Decorate with Abstract',
    description: 'Decorate your room with quality collection of abstract art pieces'
  },
  {
    id: 6,
    image: '/images/6.jpg',
    title: 'Stay away from fake art pieces',
    description: 'We provide you the original art pieces from the artists, which describes their talent & hard work'
  }
]
function getCarouselItems() {
  return ItemCarouselData.map((item) => {
    return (
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100 carouselImage"
          src={item.image}
          alt={item.title}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
}
function ItemCarousel() {
    return (
      <Carousel className='carouselContainer'>
        { getCarouselItems() }
      </Carousel>
    );
  }
  
  export default ItemCarousel;
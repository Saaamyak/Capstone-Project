import ItemCarousel from "./ItemCarousel";
import "../Css/home.css";
import Card from "./Card";
import paintings from "../Utility/paintingsData.js";
import Title from "./Title";

function getCards(setProduct) {
    return paintings.map((painting) => {
        return <Card 
                    image={painting.image} 
                    title={painting.title} 
                    description={painting.description} 
                    price={painting.price} 
                    key={painting.id} 
                    productKey={painting.id} 
                    setProduct={()=>setProduct(painting.id)}/>
    });
}
function Home(props) {
    return (
        <>
            <ItemCarousel />
            <Title title="Welcome to Art Shop" />
            <p className="homeDescription">
                We provide you with the best art pieces from famous artists. We have a large collection of paintings, sculptures, and other art pieces. We provide a platform for street artists to showcase their talent. You can buy their art pieces to support them. We have a large collection of ancient art pieces. Decorate your room with quality collection of abstract art pieces. We provide you the original art pieces from the artists, which describes their talent & hard work.
            </p>
            <Title title="Our Products" />
            <div className="card-deck">
                {getCards(props.setProduct)}
            </div>
        </>
    );
}

export default Home;

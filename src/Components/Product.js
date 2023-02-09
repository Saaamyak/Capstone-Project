import paintings from "../Utility/paintingsData.js";
import Title from "./Title";
import data from '../Utility/ConstUtility.json';
import '../Css/product.css';

function Product(props) {
    const paintingId = props.productKey;
    const painting = paintings.find((painting) => painting.id === paintingId);
    return (
        <>
            <button className="backButton btn btn-primary" onClick={()=>{props.setTabState(data.HOME_STATE); props.setProduct(0)}}>&larr; Back</button>
            <Title title="Product Details" />
            <div className="productContainer">
                <div className="productImageContainer">
                    <img className="productImage" src={painting.image} alt={painting.title} />
                </div>
                <div className="productDetailsContainer">
                    <Title title={painting.title} />
                    <div className="productPrice">${painting.price}</div>
                    <div className="productDescription">
                        {painting.fulldescription}
                    </div>
                    <div className="productActions">
                        <button className="addToCartButton btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;

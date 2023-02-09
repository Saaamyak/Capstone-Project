import '../Css/card.css';

function Card(props) {
    const { title, description, image, price } = props;
  return (
    <>
        <div className="card">
          <div className="img-container">
            <img src ={image} className="card-img-top" alt={title}/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description} </p>
            <p className="card-text"><small className="text-muted">&#8377; {price}</small></p>
            <button className="btn btn-primary" onClick={props.setProduct}>Buy Now</button>
          </div>
        </div>
    </>
  );
}

export default Card;

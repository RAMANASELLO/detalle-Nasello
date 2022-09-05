const Item = ({description, price, image}) => {
    return (
      <div>
          <img src={image} alt="" />
          <p>{description}</p>
          <p>{price}</p>
      </div>
    );
  };
  
  export default Item
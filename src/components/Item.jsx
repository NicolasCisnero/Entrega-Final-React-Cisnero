import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 my-3 item-container">
      <Link to={"/item/" + producto.id} className='link-img-container'>
          <img
            src={producto.Imagen}
            className="card-img-top"
            alt={producto.Nombre}/>
      </Link>
      <div className="cardHome">{producto.Nombre}</div>
    </div>
  );
};

export default Item;

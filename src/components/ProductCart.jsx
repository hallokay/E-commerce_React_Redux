import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductCart = ({ item: { id, cover, name, price } }) => {
  return (
    <>
      <div className="box boxItem" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt={name} />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCart
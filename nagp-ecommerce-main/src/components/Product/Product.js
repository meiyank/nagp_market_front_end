import React from 'react';
import { Link } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";
import "./Product.scss";

const Product = ({product}) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discount?.discountPercent / 100));

  return (
      <Link to={`/product/${product?.id}`} key={product?.id}>
        <div className="product-item bg-white shadow-sm rounded-lg overflow-hidden">
          {/* <div className="category">{product?.category?.categoryName}</div> */}

          <div className="product-item-img">
            <img
                className="img-cover w-full h-auto"
                src={product?.images?.[0]?.url || 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
                alt={product?.name || 'Product Image'}
            />
          </div>

          <div className="product-item-info p-4 text-center">
            <div className="brand text-sm text-gray-600">
              <span>Brand: </span>
              <span className="font-semibold">{product?.brand || 'Unknown Brand'}</span>
            </div>

            <div className="title py-2 text-lg font-medium text-gray-800 truncate">
              {product?.name || 'Product Name'}
            </div>

            <div className="price flex justify-center items-center space-x-2">
        <span className="old-price text-sm text-gray-500 line-through">
          {formatPrice(product?.price) || 'N/A'}
        </span>

              <span className="new-price text-xl font-semibold text-green-600">
          {formatPrice(discountedPrice) || 'N/A'}
        </span>

              <span className="discount text-sm text-red-500 font-bold">
          ({product?.discount?.discountPercent}% Off)
        </span>
            </div>
          </div>
        </div>
      </Link>

  )
}

export default Product
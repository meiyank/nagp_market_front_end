import React, {useEffect} from 'react';
import "./HomePage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from "../../components/ProductList/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import Loader from "../../components/Loader/Loader";
import { STATUS } from '../../utils/status';
import HeaderSlider from '../../components/Slider/HeaderSlider';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  // randomizing the products in the list
  const tempProducts = [];
  if(products.length > 0){
    for(let i in products){
      let randomIndex = Math.floor(Math.random() * products.length);

      while(tempProducts.includes(products[randomIndex])){
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }
  const getProductsByCategory = (categoryId) => {
    return products.filter(product => product.category.id === categoryId);
  };
  

  return (
    <main>
        <div className='slider-wrapper'>
        <HeaderSlider />
        </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {products} />}
            </div>

            {/* <div className='categories-container'>
                {categories.slice(0, 4).map((category, index) => (
                    <div className='categories-item' key={index}>
                    <div className='title-md'>
                        <h3>{category.categoryName}</h3>
                    </div>
                    {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={getProductsByCategory(category.id)} />}
                    </div>
                ))}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
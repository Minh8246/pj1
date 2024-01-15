import './ProductList.css';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products,setProducts] = useState([]);


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get('http://localhost:3001/product/productList');
        setProducts(response.data)
      }catch(error){
        console.log("error:",error)
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  const jumptoproduct = (product_id) => {
    
    console.log(product_id);
    navigate(`/Product/${product_id}`);
  };

  return (
    
    <div className="product-list">
    {products.map((product) => (

        <div key={product.product_id} className="product-item"  onClick={ ()=> jumptoproduct(product.product_id) }>
        <img src={product.image_path} alt={product.name} className="product-image" />
        <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
        </div>
        </div>
    ))}
    </div>

  );
};

export default ProductList;


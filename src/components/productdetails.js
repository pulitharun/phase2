import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfProducts } from "./productslice";
import { useEffect, useState } from "react";
import "./productdetails.css";
import HomeScreen from "./Homescreen";
import Dashboard from "./dashboard";
import { useNavigate } from "react-router-dom";
import { Addtocart } from "./cartslice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tenure, setTenure] = useState(3);
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = useSelector((state) => state.auth.user);
  const { categoryName, product_id } = useParams();
  const products = useSelector((state) => state.product.products);
 
  const product = products.find((product) => product.id === product_id);

 ///const product = products.find(
   //(product) => product.id === (product_id)
  //)

  const tenureChangeHandler = (event) => {
    setTenure(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      let index = 0;
      for (let t = 0; t < product.rentaloptions.length; t++) {
        if (product.rentaloptions[t].tenure == tenure) {
          index = t;
        }
      }
      const totalPerMonth = product.rentaloptions[index].ratepermonth;
      const price = totalPerMonth * tenure *quantity;
      const cartdata = {
        ...product,
        tenure: tenure,
        quantity: quantity,
        amount: price,
      };
      dispatch(Addtocart(cartdata));
      alert("Added to cart Successfully!!!");
      console.log(cartdata)
      navigate("/cart");
    } else {
      alert("Please Login");
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(fetchListOfProducts(categoryName));
  }, [categoryName, dispatch]);
  
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <HomeScreen />}


      <div className="page">
        <div className="left-image">
      
        </div>
        <div className="right-image">
          <div>
            <p>Name: {product.name}</p>

            <p>Description:{product.description}</p>

            <p>Condition:{product.condition}</p>

            <p>Delivered in :{product.delivery_in_days} days</p>

            <p>Colour : {product.color}</p>

            <p>Size:{product.size}</p>
            <br />
            <div>
              <h3>RentalOptions:</h3>
              <p>3months: {product.rentaloptions[0].ratepermonth}</p>

              <p>6months: {product.rentaloptions[1].ratepermonth}</p>

              <p>9months: {product.rentaloptions[2].ratepermonth}</p>

              <p>12months:{product.rentaloptions[3].ratepermonth}</p>
            </div>
            <p>
              Quantity:
              <input
                value={quantity}
                onChange={quantityChangeHandler}
                type="number"
              />
            </p>
            <p>
              Tenure:
              <select id="tenure" value={tenure} onChange={tenureChangeHandler}>
                <option value={3}>3 months</option>
                <option value={6}>6 months</option>
                <option value={9}>9 months</option>
                <option value={12}>12 months</option>
              </select>
            </p>
            <button onClick={handleAddToCart}>+ Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
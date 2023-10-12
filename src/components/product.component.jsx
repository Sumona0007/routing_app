import React from 'react';

const Product = (props) => {
    const handleclick = () =>{
       props.history.push('/products');
    }
    return (
        <button onClick={handleclick}>Save a product</button>
    );
}
 
export default Product;
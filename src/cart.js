import React, { useState, useEffect } from 'react';

function CartPage() {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetchCarts();
    }, []);

    const fetchCarts = () => {
        fetch('https://dummyjson.com/carts/1')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCarts(data.products); // Assuming data directly contains cart items
          })
    };

    return (
        <div className="App" style={{ textAlign: 'center', color: "blue" }}>
            <h2>Cart Page</h2>
            <ul>
                {/* {Array.isArray(carts) && carts.map((cart, index) => ( */}
                    {/* <li key={index}> */}
                        {/* <h3>Cart {index + 1}</h3> */}
                        <ul>
                            {Array.isArray(carts) && carts.map((product, prodIndex) => (
                                <li key={prodIndex}>
                                    {product.title} - {product.price}  Quantity: {product.quantity}
                                </li>
                            ))}
                        </ul>
                    {/* </li> */}
                {/* ))} */}
            </ul>
        </div>
    );
}

export default CartPage;

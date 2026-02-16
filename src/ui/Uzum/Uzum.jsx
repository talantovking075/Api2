import React, { useState, useEffect } from 'react';
import './Uzum.css';

const Uzum = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik yuz berdi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Yuklanmoqda...</div>;

  return (
    <div className="uzum-container">
      <div className="product-grid">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title.slice(0, 25)}...</h3>
            <p className="price">${item.price}</p>
            <button>Savatga qo'shish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uzum;
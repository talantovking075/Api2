import React, { useState, useEffect } from 'react';
import './Fortnite.css';

const Fortnite = () => {
  const [shop, setShop] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const API_KEY = '08bf563f-94f051fe-53ee5e2e-460e350a';

  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=en', {
      headers: { 'Authorization': API_KEY }
    })
      .then(res => res.json())
      .then(data => {
        if (data.shop) {
          setShop(data.shop);
          setFilteredShop(data.shop);
        }
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = shop.filter(item => 
      item.displayName.toLowerCase().includes(value)
    );
    setFilteredShop(filtered);
  };

  return (
    <div className="fortnite-container">
      <div className="search-wrapper">
        <input 
          type="text" 
          className="fortnite-search"
          placeholder="Skin yoki buyum qidirish..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="fortnite-grid">
        {filteredShop.map((item, index) => (
          <div key={index} className="fortnite-card">
            <div className="image-wrapper">
              <img src={item.displayAssets[0]?.full_background} alt={item.displayName} />
            </div>
            <div className="fortnite-info">
              <h3>{item.displayName}</h3>
              <div className="price-tag">
                <img src="https://fortnite-api.com/assets/vbuck.png" alt="v" />
                <span>{item.price.finalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fortnite;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const sections = [
    {
      title: "Cloud Weather",
      desc: "Dunyo bo'ylab ob-havo ma'lumotlarini real vaqtda kuzatib boring.",
      path: "/cloud",
      color: "#38bdf8",
      icon: "☁️"
    },
    {
      title: "Kino Ma'lumotlari",
      desc: "Dunyo bo'ylab kino ma'lumotlarini qidirish va ko'rish.",
      path: "/kino",
      color: "#92f838ff",
      icon: "🎬"
    },
    {
      title: "Fortnite Shop",
      desc: "Eng so'nggi Fortnite skinlari, raqslari va V-Bucks narxlarini ko'ring.",
      path: "/fortnite",
      color: "#f59e0b",
      icon: "🎮"
    },
    {
      title: "Uzum Market",
      desc: "Fakestore API orqali mahsulotlar katalogi va narxlar bilan tanishing.",
      path: "/uzum",
      color: "#a855f7",
      icon: "🛍️"
    }
  ];

  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Multi<span>API</span> Dashboard</h1>
        <p>Barcha kerakli ma'lumotlar bir joyda jamlangan zamonaviy platforma.</p>
      </header>

      <div className="home-grid">
        {sections.map((item, index) => (
          <div key={index} className="home-card" style={{ '--hover-color': item.color }}>
            <div className="card-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={item.path} className="home-btn">Bo'limga o'tish</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
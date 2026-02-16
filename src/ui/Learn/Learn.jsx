import React from 'react';
import './Learn.css';

const Learn = () => {
  const guideData = [
    {
      title: "Uzum Market Bo'limi",
      desc: "Uzum sahifasida siz FakeStore API orqali mahsulotlar ro'yxatini ko'rishingiz mumkin. Qidiruv paneli orqali mahsulot nomini yozib, kerakli buyumni tezda topish imkoniyati mavjud.",
      icon: "🛍️"
    },
    {
      title: "Fortnite Shop",
      desc: "Bu bo'limda Fortnite o'yinining joriy do'konidagi barcha buyumlar, ularning narxi (V-Bucks) va kamyoblik darajasi ko'rsatiladi. Ma'lumotlar real vaqt rejimida yangilanadi.",
      icon: "🎮"
    },
    {
      title: "Cloud Weather",
      desc: "Ob-havo bo'limida siz istalgan shahar nomini yozib, Enter tugmasini bossangiz, o'sha joydagi harorat, namlik va shamol tezligi haqida ma'lumot olasiz.",
      icon: "☁️"
    },
    {
      title: "Kino Olami (OMDb)",
      desc: "Kino sahifasida dunyo miqyosidagi filmlarni qidirishingiz mumkin. Har bir filmning yili, turi va posteri ko'rsatiladi. Qidiruv uchun film nomini to'liq yoki qisman yozish kifoya.",
      icon: "🎬"
    }
  ];

  return (
    <div className="learn-container">
      <div className="learn-header">
        <h1>Qo'llanma va Texnologiyalar</h1>
        <p>Loyihamiz qanday ishlashi va undagi imkoniyatlar bilan tanishing</p>
      </div>

      <div className="learn-content">
        <div className="api-info-grid">
          {guideData.map((item, index) => (
            <div key={index} className="guide-card">
              <div className="guide-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h2>Texnologik Stack</h2>
          <div className="tech-tags">
            <span>React.js</span>
            <span>React Router</span>
            <span>REST API</span>
            <span>CSS3 Modules</span>
            <span>JavaScript ES6+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
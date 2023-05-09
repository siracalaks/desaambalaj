import React, { useState } from 'react';

import {BiMap} from 'react-icons/bi';
import './AboutContent.css';

function AboutContent() {
  const [articles, setArticles] = useState({
    'article': {
      "color": "FEC006",
      "title": "Ambalaj üretiminin önde gelen şirketlerinden biri olduk",
      "category": "İstanbul/Büyükçekmece",
      "excerpt": "Haramiderede bulunan üretim tesisimizde 500 kişiye istihdam sağlanmakta ve ambalaj üretimi yapılmaktadır.",
      "date": new Date()
    },
    'article-1': {
      "color": "2196F3",
      "title": "Nano Plastik Üretiminde Türkiyede Yenilikçi-Kullabilir Üretim",
      "category": "Ankara/Çankaya",
      "excerpt": "Türkiyede Ambalaj sektöründe üretime nano-teknolojiyi de dahil ederek öncü olmaya devam edeceğiz.",
      "date": new Date()
    },
    'article-2': {
      "color": "FE5621",
      "title": "Yenilebilir Ambalaj Üretimi İle Üretimde Devrim Gerçekleştirildi",
      "category": "Gaziantep/Nizip",
      "excerpt": "Küresel ısınmanın değişmesiyle birlikte beraberinde getirdiği sorunlara çözümler buluyoruz.",
      "date": new Date()
    },
    'article-3': {
      "color": "673AB7",
      "title": "Gelişen Teknoloji İle Üretimde Akıllı Robotlar İle Çalışılıyor",
      "category": "İzmir/Menemen",
      "excerpt": "Teknoloji devriminden sonra hızla gelişen dünya düzenine uyum sağlamak adına ve hızlı üretim ile devrime uyum sağlamaya devam ediyoruz",
      "date": new Date()
    }
  });

  function renderArticle(key) {
    return (
      <div className="column" key={key}>
        <Article index={key} details={articles[key]} />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        {Object.keys(articles).map(renderArticle)}
      </div>
    </div>
  );
}

function Article({ details }) {
  const styles = {
    backgroundColor: '#' + details.color
  };

  return (
    <article className="article">
      <h3 className="article__category" style={styles}><BiMap/>{details.category}</h3>
      <h2 className="article__title">{details.title}</h2>
      <p className="article__excerpt">{details.excerpt}</p>
    </article>
  );
}

export default AboutContent;

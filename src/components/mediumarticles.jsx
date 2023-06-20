"use client";
import { useState, useEffect } from 'react';
import MediumCard from './mediumcards.jsx';
import BlogHero from './eventhero.jsx';


const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nutanbhogendrasharma")
      .then(res => res.json())
      .then(data => setArticles(data.items));
  }, []);

  return (
    <div className='container mx-auto max-w-screen-xl px-4 py-8'>
        <BlogHero />

    <div className="flex flex-wrap mt-2">
        
      {articles.map((article, index) => (
        <div key={index} className="w-full lg:w-1/2 mb-4 p-2 ">
          <MediumCard article={article} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default MediumArticles;

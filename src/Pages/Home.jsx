import React, { useState } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Post';
import Footer from '../Components/Footer/Footer';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="homeParentDiv">
      <Header onSearch={handleSearch}  />
      <Banner />
      <Posts searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Home;
 
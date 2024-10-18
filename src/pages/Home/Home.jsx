import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/NavBar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import AppDownlaod from '../../components/AppDownload/AppDownlaod'

function Home() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownlaod />
    </div>
  )
}

export default Home

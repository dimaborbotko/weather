import React, { useState } from 'react'
import SearchBar from './SearchBar'
import CityList from './CityList'
import { manageCityList } from '../utils/manageCityList';

export default function Home() {
  const [cities, setCities] = useState([]);
  const manage = manageCityList(cities, setCities)
  if(cities.length > 0){
    console.log(cities)
  }
  return (
    <div>
      <SearchBar manage={manage}/>
      <CityList cityArr={cities}/>
    </div>
  )
}

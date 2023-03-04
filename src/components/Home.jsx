import React from 'react'
import SearchBar from './SearchBar'
import CityList from './CityList'
import { manageCityList } from '../utils/manageCityList';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Home() {
  const [cities, setCities] = useLocalStorage("cities", []);
  const manage = manageCityList(cities, setCities)
  if(cities.length > 0){
    console.log(cities)
  }
  return (
    <div>
      <SearchBar manage={manage}/>
      <CityList cityArr={cities} manage={manage}/>
    </div>
  )
}

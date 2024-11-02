import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsMain from './Components/NewsMain'

const App = () => {
  const [category, setCategory] = useState("general")
  const [country, setCountry] = useState("in")

  return (
    <div>
       <Navbar setCategory={setCategory} setCountry={setCountry}/>
       <NewsMain category={category} country={country}/> 
    </div>
  )
}

export default App


//category is set to "general" by default
//setCategory is a function that allows us to update the category.
//When a user interacts with the Navbar, the Navbar calls the setCategory function with the new category value.
//This updates the category state in the App component to the new value chosen by the user.
//After the category state is updated, the App component re-renders.
//During this re-render, the new value of category is passed down to the NewsMain component.




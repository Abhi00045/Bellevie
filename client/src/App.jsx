import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Collection} from '../Pages/Collection'
import {Login} from '../Pages/Login'
import {Cart} from '../Pages/Cart'
import {Orders} from '../Pages/Orders'
import {PlaceOrder} from '../Pages/PlaceOrder'
import {Product} from '../Pages/Product'
import {Contact} from '../Pages/Contact'
import {About} from '../Pages/About'
import {Navbar} from '../Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* -----------------------------Routes & Their paths added------------------------- */}
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/collection' element={<Collection/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
       </div>
    </>
  )
}

export default App

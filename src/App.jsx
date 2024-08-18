import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Discount from './components/Discount'
import Footer from './components/Footer'
import Header from './components/Header'
import Join from './components/Join'
import Media from './components/Media'
import Price from './components/Price'
import Product from './components/Product'
import Profile from './components/Profile'
import Testimoni from './components/Testimoni'

function App() {

  return (
    <div className=' font-popps'>
     <Header/>
     <Banner/>
     <Media/>
     <Discount/>
     <Profile/>
     <Product/>
     <About/>
     <Join/>
     <Price/>
     <Testimoni/>
     <Footer/>
    </div>
  )
}

export default App

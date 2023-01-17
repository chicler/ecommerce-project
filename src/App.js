import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Products } from './components/Products';
import { Product } from './components/Product'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { DemoPage } from './components/DemoPage';
import { TermsNConditions } from './components/TermsNConditions'
import { Footer } from './components/Footer';

/* Aqui importe todos los mis componentes y el css
tambien importe algunos hooks de react-router y cree las rutas */

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/error404' element={<DemoPage/>} />
        <Route path='/cart' element={<DemoPage/>} />
        <Route path='/termsnconditions' element={<TermsNConditions/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

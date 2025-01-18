import './App.css'
// import Cart from './components/Cart'
import Footer from './components/Footer'
// import Home from './components/Home'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'

function App() {
  return (
    <div className="layout">
      {/* SOLO SE MOSTRARÁN LOS COMPONENTES NAVBAR, HOME Y FOOTER */}
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App

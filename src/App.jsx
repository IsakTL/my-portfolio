import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer";

function App() {
  // Unused; Connected to div below Footer
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;
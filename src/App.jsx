// import { useState } from 'react'
import "./App.css";
import { Outlet } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default function App() {
  // git const [count, setCount] = useState(0)

  
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

library.add(fab, fas, far)
// import { useState } from 'react'
// import "./App.css";
import { Outlet } from 'react-router-dom';
import Nav from "./components/Nav";

export default function App() {
  // git const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

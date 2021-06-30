import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Catalog } from "./components/Catalog";
import "./styles/global.css";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="App">
      <button onClick={handlePrint}>Imprimir</button>
      <Catalog ref={componentRef} />
    </div>
  );
}

export default App;

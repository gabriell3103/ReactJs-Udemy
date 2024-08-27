import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitleF = false
  const redTitleT = true

  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Esse é o paragrafo do App.jsx</p>
      {/* Css Inline */}
      <p style={{
        color: "magenta", 
        padding: "25px", 
        borderTop: "2px solid red"
        }}
      >
        Este paragrafo foi estilizado de forma inline
      </p>
      
      <p style={{
        color: "magenta", 
        padding: "25px", 
        borderTop: "2px solid red"
        }}
      >
        Este paragrafo foi estilizado de forma inline
      </p>
      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      
      <h2 style={name === "Matheus"? {color: "green", backgroundColor: "#000"} : null}>Teste nome</h2>
      {/* Classes dinamicas */}
      <h2 className={redTitleT ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <h2 className={redTitleF ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </>
  )
}

export default App

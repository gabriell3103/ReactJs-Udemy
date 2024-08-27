import './App.css'
import Car from './components/Car';

function App() {

  const carros = [
    {name: "Porsche", color: "Cinza", km: 0},
    {name: "Ford", color: "Azul", km: 50000},
    {name: "Civic", color: "Preto", km: 10000},
  ]

  return (
    <>
      <h2>Detalhes de carros</h2>

      <div>
        {carros.map((carro) => (
          <Car carro={carro}/>
        ))} 
      </div>
    </>
  )
}

export default App

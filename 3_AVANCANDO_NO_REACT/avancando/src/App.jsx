import {  useState } from "react";
import './App.css'

import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  // const name = "Joaquim"

  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand:"Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand:"KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand:"Renault", color: "Amarelo", newCar: false, km: 234 }
  ];

  const pessoas = [
    { name:"Luis", age: "21", job: "Programmer" },
    { name:"Gabas", age: "17", job: "Desempregado" },
    { name:"Kaik", age: "20", job: "Nota" }
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Avancando no React!</h1>
      {/* imagem em public */}
      <div>   
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* imagem em public */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName  name={userName}/>
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/* Loop em Array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      {/* Fragments */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container myValue = "testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue = "Testing 2">
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message  msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Tarefa 4 */}
      {pessoas.map((pessoa) => (
        <UserDetails 
        name={pessoa.name}
        age={pessoa.age}
        job={pessoa.job}/>
      ))}
    </>
  )
}

export default App  

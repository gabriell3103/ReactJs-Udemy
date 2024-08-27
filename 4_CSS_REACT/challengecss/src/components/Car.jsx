import style from "./Car.module.css"

const Car = ({carro}) => {
  return (
    <div className={style.bloco}>
        <h2 className={style.car_details}>{carro.name}</h2>
        <p>Cor: {carro.color}</p>
        <p>Km: {carro.km}</p>
    </div>
  )
}

export default Car
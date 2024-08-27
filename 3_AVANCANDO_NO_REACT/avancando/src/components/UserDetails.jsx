const UserDetails = ({name, age, job}) => {
  
    return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Trabalho: {job}</p>
        {age >= 18 ? <p>Pode tirar a carta</p> : <p>Não pode tirar a carta</p>}
    </div>
  )
}

export default UserDetails
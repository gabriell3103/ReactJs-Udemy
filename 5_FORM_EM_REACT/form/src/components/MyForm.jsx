import { useState } from 'react';
import "./MyForm.css"

const MyForm = ({user}) => {
    const {name, email, bio, role} = user
    
    // 6 - Controlled inputs
    
    //3 - Gerenciamento de dados
    const[userName, setName] = useState(user ? name : "")
    const[userEmail, setEmail] = useState(user ? email : "")

    const [userBio, setBio] = useState(user ? bio : "")

    const [userRole, setRole] = useState(user ? role : "")

    const handleName = (e) =>{
        setName(e.target.value)
    }
    // console.log(name)
    // console.log(email)

    const handleSubmit = (e) => {
        event.preventDefault()
        console.log("Enviando formulario")
        console.log(userName, userEmail, userBio, userRole)

        // limpar form
        setName("")
        setEmail("")
        setBio("")
    }
  
  
    return (
    <div>
        {/* Envio de form */}
        {/* 1- Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName} 
                value={userName} />
            </div>
            {/* 2- label envolvendo o input */}
            <label>
                <span>E-mail</span>
                {/* Simplificação de manipulação de state */}
                <input type="email" 
                name="email" 
                placeholder="Digite seu e-mail" 
                onChange={(e) => setEmail(e.target.value)} 
                value={userEmail}/>
            </label>
            {/* TextArea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuario" 
                onChange={(e) => setBio(e.target.value)} value={userBio}></textarea>
            </label>
            {/* Select */}
            <label>
                <span>Função do Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={userRole}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm
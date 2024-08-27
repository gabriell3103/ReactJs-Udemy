const Challenge = () => {
    const num1 = 6
    const num2 = 8
    
    const handleSomaValores = () => {
        console.log(`A soma é: ${num1 + num2}`)
    }

    return (
        <div>
            <p>O primeiro numero: {num1} e o segundo {num2}</p>
            <button onClick={handleSomaValores}>Clique aqui!</button>
        </div>
    )
}
export default Challenge
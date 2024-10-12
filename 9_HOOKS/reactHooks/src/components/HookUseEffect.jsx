import React from 'react';
import { useEffect, useState } from 'react';

const HookUseEffect = () => {
  // 1 - useEffect sem dependencias
  useEffect(() => {
    console.log('Estou sendo executado');
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array deps vazio
  useEffect(() => {
    console.log('vou ser executado somento uma vez!');
  }, []);

  // 3 - item no array de deps
  const [anotherNumber, setAnotherNumber] = useState(1);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('Sou atualizado toda vez que o anotherNumber muda!');
    }
  }, [anotherNumber]);

  // 4 - limpeza do useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Hello World!');

      // gera erro sem cleanup
      //setAnotherNumber(anotherNumber + 1);
    }, 2000);

    // realizar exemplo sem clean up
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar outro numero
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;

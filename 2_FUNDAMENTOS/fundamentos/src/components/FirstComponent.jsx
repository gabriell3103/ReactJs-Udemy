// Arquivo de estilo

import MyComponent from './MyComponent';

const FirstComponent = () => {
    // essa funcão faz isso

    /* 
     multi line
    */
    return (
        <div>
            {/* Algum comentario */}
            <h1>Meu primeiro Componente</h1>
            <p className='teste'>Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;
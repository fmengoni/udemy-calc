// importación
import React from "react";
import Button from "./components/Button";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperation";
import Numbers from "./components/Numbers";
import Result from './components/Result';
import './App.css';

// Función Flecha o Arrow Function
const  App = () => {
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text)
    }
    console.log("Renderización de la App")
    // Lo que ejecuta la función
    return (
    <main className='react-calculator'>
        <Result value="0"/>
        <Numbers onClickHandler={clickHandlerFunction}/>
        <Functions 
            onContentClear={() => console.log("Content clear")} 
            onDelete={() => console.log("onDelete")} 
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={ equal => 
                console.log("Equal:", equal)
            }
        />
    </main>
    )
}

// exportación (para que este disponible desde otros componentes)
export default App
import React, { useState } from 'react';
import Card from "./Card.jsx";

function App() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [tipo, setTipo] = useState('');
    const [errores, setErrores] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let errores = false;


        if(!nombre || nombre.length <3 || nombre[0]===" "){
            errores = true;
        }
        if(!tipo || tipo.length < 6){
            errores = true;
        }

        setErrores(errores)
        if(errores){
            setMostrar(false)
        }else{
            setMostrar(true)
        }
    };

    return (
        <div>

        <form onSubmit={handleSubmit}>
            <h2>
                Animal favorito
            </h2>
            <div>
                <label>Nombre:</label>
                <br/>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Tipo:</label>
                <br/>
                <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />
            </div>
            <div>
                <label>Edad:</label>
                <br/>
                <input
                    type="text"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
            {errores && <p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p>}
            {mostrar &&<Card edad={edad} tipo={tipo} nombre={nombre}></Card>}
        </div>
    );
};

export default App;
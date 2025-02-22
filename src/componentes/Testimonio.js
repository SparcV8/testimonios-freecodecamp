import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
            src={require(`../imagenes/${props.imagen}.jpg`)}
            alt="foto del comentarista"
            width="90px;"
            />
        <div className='contenedor-text-tstimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>

        </div>
        </div>
    );
}

export default Testimonio;


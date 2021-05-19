import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {
    
    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;


    /* definir el state */
    const [cantidad,guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    /* validar el presupuesto */
    const agregarPresupuesto = e=>{
        e.preventDefault();

        /* validar */

        if (cantidad < 1 || cantidad === null || isNaN(cantidad)) {
            guardarError(true);
            return
        }

        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto( cantidad );
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

    }


    return (
       <Fragment>
           <h2>Coloca tu Presupuesto</h2>
            {/* mostrar error si es que hay */}
            {error ?  <Error mensaje="El presupuesto es Incorrecto" />  :  null}
           <form action=""
            onSubmit={agregarPresupuesto}
           >
               <input 
                type="number" 
                className="u-full-width" 
                placeholder="Agrega tu presupuesto"
                onChange={e => guardarCantidad(parseFloat(e.target.value))}
                />
                <input type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Prespuesto"/>
           </form>
       </Fragment>
    )
}

export default Pregunta

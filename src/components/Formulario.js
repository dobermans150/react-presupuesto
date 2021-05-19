import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {

    const {guardarGasto, guardarCrearGasto} = props;
    /* state */
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();

        /* Vaildar */
        if (cantidadGasto < 1 || cantidadGasto === null || isNaN(cantidadGasto)) {
            guardarError(true);
            return
        }

        

        /* construir objeto de gasto */
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()

        }

        /*  pasar el gasto al componente principal */
        guardarGasto(gasto);
        guardarCrearGasto(true);

        /* Eliminar alerta */
        guardarError(false);

        /* Resetear el form */
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos Aqui</h2>
            {error ?  <Error mensaje="Ambos Campos son obligatorios" />  :  null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarCantidadGasto(parseFloat(e.target.value))}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    )
}

export default Formulario

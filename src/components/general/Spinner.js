//componente stateless no necesita estado ni ciclo de vida
import React from 'react';
import '../../css/spinner.css'

const Spinner = (props) =>(
    <div className= "center">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
)

export default Spinner;
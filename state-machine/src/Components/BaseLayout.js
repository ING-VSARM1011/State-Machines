import React from 'react';
import { useMachine } from '@xstate/react'
import bookingMachine from '../Machines/bookingMachine';

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);
    
    console.log('nuestra maquina', state);
    console.log('matches true', state.matches('initial')); // Evalua si la máquina esta en el pasado como parámetro.
    console.log('matches false', state.matches('tickets'));
    console.log('can', state.can('FINISH')); // Evalua si se puede ejecutar el evento.
    
    return (
        <div>Hola</div>
    );
}

export default BaseLayout;
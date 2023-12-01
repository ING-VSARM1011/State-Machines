import React from 'react';
import { useMachine } from '@xstate/react'
import bookingMachine from '../Machines/bookingMachine';

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);
    
    return (
        <div>Hola</div>
    );
}

export default BaseLayout;
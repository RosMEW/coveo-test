import React, { useState } from 'react';
import './ErrorModal.scss';
import { CSSTransition } from 'react-transition-group';

const ErrorModal = () => {
    const [show, setShow] = useState(true);

    return (
        <CSSTransition
            in={show}
            timeout={300}
            unmountOnExit
            mountOnEnter
            classNames='error'>
            <div className='error' onClick={() => setShow(false)}>
                <img src='/img/404_error_message.jpg' alt='404' />
            </div>
        </CSSTransition>
    );
};
export default ErrorModal;

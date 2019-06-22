import React from 'react';
import './ButtonOutline.scss';

type btn = {
    btnText: string;
    onClick: () => void;
};

const ButtonOutline = (props: btn) => (
    <div>
        <button className='btnOutline' onClick={props.onClick}>
            {props.btnText}
        </button>
    </div>
);

export default ButtonOutline;

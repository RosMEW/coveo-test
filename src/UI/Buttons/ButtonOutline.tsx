import React from 'react';
import './ButtonOutline.scss';

type btnProps = {
    btnText: string;
    onClick: () => void;
};

const ButtonOutline = (props: btnProps) => (
    <div>
        <button className='btnOutline' onClick={props.onClick}>
            {props.btnText}
        </button>
    </div>
);

export default ButtonOutline;

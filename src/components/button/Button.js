import React from 'react';

//Packages
import {Link} from 'react-router-dom';

//CSS
import './Button.css';

function Button({children, type, onClick, buttonStyle, buttonSize}) {
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
        <>
            <Link to={'register'} className={'btn-mobile'}>

                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} type={type}>
                    {children}
                </button>

            </Link>
        </>
    );
}

export default Button;

import React from 'react';
import PropTypes from 'prop-types';






const propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    outline: PropTypes.bool,
    color: PropTypes.oneOf(['light', 'success', 'active']),
    small: PropTypes.bool,
};

const Button = ({ text, onClick, className, outline, color, isLoading = false, type, small = false }) => {
    return (
        <button
           
            onClick={onClick}
            disabled={isLoading}
            type={type}
        >
            {isLoading ? <Spinner animation="border" /> : text}
        </button>
    );
};

Button.propTypes = propTypes;

export default Button;
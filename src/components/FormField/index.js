import React from 'react';

import { StyledLabel, StyledInput } from './styles';

function FormField({ label, type, placeholder, name, value, onChange, as }) {
    return (
        <StyledLabel
            htmlFor={name}
        >
            {type === 'color' ? label : ''}
            <StyledInput 
                type={type} 
                placeholder={label}
                name={name}
                value={value}
                onChange={onChange}
                as={as}
            />
        </StyledLabel>
    );
}

export default FormField;
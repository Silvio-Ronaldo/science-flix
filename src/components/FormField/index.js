import React from 'react';

import { StyledLabel, StyledInput } from './styles';

function FormField({ label, type, placeholder, name, value, onChange, as, suggestions }) {
    const hasSuggestions = Boolean(suggestions.length >= 1);

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
                autoComplete={hasSuggestions ? "off" : undefined}
                list={`suggestion_${name}`}
            />
            {
                hasSuggestions && (
                    <datalist id={`suggestion_${name}`}>
                        {
                            suggestions.map((suggestion) => (
                                <option value={suggestion} id={`suggestion_${name}`}>
                                    {suggestion}
                                </option>
                            ))
                        }
                    </datalist>
                )
            }
        </StyledLabel>
    );
}

export default FormField;
import React from 'react'
import styled from 'styled-components'

export function Input({label,setter,placeholder,value, disabled}) {
    return (
        <InputContainer>
            <label htmlFor={label}>{label}:</label>
            <input type="text" id={label} value={value} disabled={disabled} onChange={(event) => {setter(event.target.value)}} placeholder={placeholder} />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    label {
        font-size:12px;
    }
    input {
        border: 1px solid black;
        padding:2px;
    }
`

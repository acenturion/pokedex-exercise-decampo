import styled from "styled-components";

const Button = styled.button`
    padding: 10px 20px;
    background-color: #ffcb05;
    color: #000;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0c413;
    }
`

export default Button;
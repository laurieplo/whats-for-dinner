import { css } from '@emotion/css';

export const container = css`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr auto;

    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    list-style: none;
`;

export const replace = css`
    cursor: pointer;
    border: none;
    &:hover {
        color: white;
    }
`;

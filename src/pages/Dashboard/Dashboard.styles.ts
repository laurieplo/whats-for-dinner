import { css } from '@emotion/css';

export const logo = css`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const logoImg = css`
    height: 75px;
    margin-right: 20px;
    pointer-events: none;
`;

export const header = css`
    background-color: #282c34;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const content = css`
    padding: 0;
    margin: 20px;
    display: grid;
    grid-row-gap: 10px;
`;

export const button = css`
    background-color: #282c34;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #282c34;
    }
`;

export const title = css`
    font-weight: 700;
    font-size: 24px;
`;

export const container = css`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 3fr;
    align-items: start;
`;

export const configuration = css`
    display: grid;
    grid-row-gap: 10px;
    margin: 20px 0 20px 20px;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 5px;
`;

export const input = css`
    border: none;
    height: 20px;
    width: 30px;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
`;

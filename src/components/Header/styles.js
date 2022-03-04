import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Saira Stencil One';
    font-size: 40px;
    color: ${({ theme }) => theme.headerLogo}
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  margin-left: auto;

  svg {
    margin-left: 24px;
    color: ${({ theme }) => theme.textColor}
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 352px;
  /* max-width: 352px; */

  background: #F3F5F6;
  padding: 10px 16px;
  border-radius: 8px;

  input {
    width: 100%;
    border: none;
    padding: 5px;
    background: transparent;
    outline: none;
    color: ${({ theme }) => theme.textColor}
  }

  svg {
    cursor: pointer;
    margin: 0;
  }
`;

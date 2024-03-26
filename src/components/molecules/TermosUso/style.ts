import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;

  .container-label {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    font-size: 12px;
    color: #424242;
    font-weight: 400;
  }

  .container-label input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 4px;
  }
  .container-label input:checked ~ .checkmark {
    background-color: #35a936;
    border: none;
  }

  .checkmark::after {
    display: none;
    content: '';
    position: absolute;
  }

  .container-label .checkmark::after {
    content: '';
    left: 6px;
    top: 2px;
    width: 5px;
    height: 9px;
    transform: rotate(45deg);
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
  }

  .container-label input:checked ~ .checkmark::after {
    display: block;
  }
`;

export const Link = styled.a`
  color: #35a936;
  font-weight: bold;
  text-decoration: underline;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #303030;
`;

export const Checkbox = styled.div`
    width: 30px;
    margin-top: 10px;
`;


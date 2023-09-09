import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
`;

export const FilterInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #ff5959;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e04949;
  }
`;

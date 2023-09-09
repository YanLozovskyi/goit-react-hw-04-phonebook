import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 20px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledField = styled(Field)`
  padding: 12px;
  max-width: 100%;
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

export const Button = styled.button`
  padding: 12px;
  width: 100%;
  background-color: #ff5959;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04949;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: #fff;
`;

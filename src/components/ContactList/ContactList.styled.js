import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #ff5959;
  color: #fff;
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
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

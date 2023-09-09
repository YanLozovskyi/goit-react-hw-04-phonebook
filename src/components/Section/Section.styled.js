import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 30px 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1200px;

  @media screen and (min-width: 375px) {
    &container {
      width: 375px;
    }
  }

  @media screen and (min-width: 768px) {
    &container {
      width: 768px;
      padding-right: 32px;
      padding-left: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    &container {
      width: 1440px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 40px;
  color: #ff5959;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

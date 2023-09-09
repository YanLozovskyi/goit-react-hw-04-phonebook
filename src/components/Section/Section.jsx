import PropTypes from 'prop-types';
import { StyledSection, Container, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  </StyledSection>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

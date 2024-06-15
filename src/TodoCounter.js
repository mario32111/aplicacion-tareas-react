
import FondoCurvado from './fondo-curvado.svg';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-size: 42px;
    text-align: center;
    margin: 0;
    color: #01B7B6
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 0 48px 48px 48px;
  font-weight: 400;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 50px 0;
  color: #00796b;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: url(${FondoCurvado});
    background-size: cover;
    z-index: -1;
  }
`;

function TodoCounter({ total, completed }) {
  return (
    <Container>
      <StyledH1>
        *INSERTE CATEGORIA*
      </StyledH1>
      <StyledH2>
        Has completado <b>{completed}</b> de <b>{total} tareas</b>
      </StyledH2>
    </Container>

  );
}

export { TodoCounter };

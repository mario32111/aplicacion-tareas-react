import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
`;

function ContainerSearch(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
  }

export { ContainerSearch };
import styled from "styled-components";
import LoginForm from "../Components/LoginForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthForm = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default AuthForm;

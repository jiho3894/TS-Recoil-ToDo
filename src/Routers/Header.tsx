import { Link, useMatch } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
`;

const HeaderBox = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HeaderLine = styled.div`
  width: 20%;
  height: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
  font-weight: 600;
`;

const LineAnimation = keyframes`
  0% {
    width: 0%;
  }

  100%{
    width: 100%;
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: red;
  position: absolute;
  bottom: 0;
  animation: ${LineAnimation} 0.2s;
`;

const Header = () => {
  const HomeMatch = useMatch("/");
  const FormMatch = useMatch("/authForm");
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderLine>
          <Link to="/">ToDoList</Link>
          {HomeMatch && <UnderLine />}
        </HeaderLine>
        <HeaderLine>
          <Link to="/authForm">AuthForm</Link>
          {FormMatch && <UnderLine />}
        </HeaderLine>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;

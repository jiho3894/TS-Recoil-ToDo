import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { gitID } from "../Recoil/Atoms";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
`;

const HeaderBox = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

const Header = () => {
  const loginID = useRecoilValue(gitID);
  const setID = useSetRecoilState(gitID);
  const onLogout = () => {
    setID("");
  };
  return (
    <HeaderContainer>
      <HeaderBox>
        <a href={`https://github.com/${loginID}`}>{`${
          loginID === "" ? "" : `${loginID}님 깃허브 이동`
        }`}</a>
        {loginID !== "" ? (
          <Link to="/" onClick={onLogout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/authForm">로그인</Link>
        )}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;

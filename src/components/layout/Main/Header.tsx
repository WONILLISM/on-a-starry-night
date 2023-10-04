import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <HeaderStyle>
      <div>Logo</div>
      <NavigationBar />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;

  display: flex;

  border: 1px solid black;
`;

export default Header;

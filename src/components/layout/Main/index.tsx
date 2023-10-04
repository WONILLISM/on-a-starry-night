import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainStyle = styled.main`
  flex: 1;

  padding-top: 80px;
`;

export default MainLayout;

import styled from "styled-components";

const Main = () => {
  return (
    <RootStyle>
      <JumbotronStyle>Jumbotron</JumbotronStyle>
      <div>Celeblist</div>
    </RootStyle>
  );
};

const RootStyle = styled.section`
  display: flex;
  flex-direction: column;
`;

const JumbotronStyle = styled.div``;

export default Main;

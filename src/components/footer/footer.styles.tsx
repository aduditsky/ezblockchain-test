import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background: linear-gradient(326.02deg, #398bf5 15.05%, #45b7f4 91.72%);
  color: #fff;

  position: relative;

  width: 100%;
  min-height: 615px;
  /* padding: 0 120px;
  padding-top: 100px;
  padding-bottom: 37px; */
`;

export const FooterBackground = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  display: none;

  svg {
    position: absolute;
  }

  .top {
    left: 48.75%;
    right: 14.13%;
    top: -52.2%;
    bottom: -25.16%;

    /* background: #398bf5; */
    /* filter: blur(20px); */
    /* transform: matrix(-0.7, 0.24, 2.21, 0.67, 0, 0); */
  }

  .mid {
    left: 30.74%;
    right: 15.37%;
    top: 42.52%;
    bottom: -31.15%;

    /* background: #83d4ff; */
    /* filter: blur(20px); */
    /* transform: matrix(0.83, -0.08, -0.89, -0.99, 0, 0); */
  }

  .left {
    left: 11.99%;
    right: 25.68%;
    top: 43.8%;
    bottom: -84.81%;

    /* background: #45b7f4; */
    /* filter: blur(20px); */
    /* transform: matrix(-0.7, 0.24, 2.21, 0.67, 0, 0); */
  }

  .right {
    left: 111.67%;
    right: -37.45%;
    top: 90.53%;
    bottom: -111.69%;

    /* background: #3973f5; */
    /* filter: blur(20px); */
    /* transform: matrix(0.64, -0.44, -1.69, -0.25, 0, 0); */
  }
`;

export const FooterData = styled.div`
  margin-top: 321px;
  padding: 0px 120px;
  z-index: 2;

  display: flex;
  div {
    flex: 1;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  gap: 262px;

  width: 100%;
  justify-content: flex-end;
  padding-right: 57px;

  margin-bottom: 55px;
`;

export const LinksContainer = styled.div`
  width: fit-content;
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    font-family: 'MonumentExtended';
    line-height: 120%;

    color: #ffffff;

    margin: 16px 0px;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;
  }

  .column {
    display: flex;
    flex-direction: column;

    font-style: normal;
    font-weight: normal;
    min-width: 112px;
    font-size: 16px;
    line-height: 160%;
    color: #ffffff;
  }
`;

export const ContactData = styled.div`
  display: grid;

  grid-template-columns: auto auto auto auto;
  justify-content: space-around;

  //Временно
  margin-bottom: 37px;
  border-top: 1px solid #fff;

  span {
    color: #495160;
  }

  div {
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 26px 62px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    border-left: 1px solid #fff;

    &:first-of-type {
      border-left: none;
    }
  }
`;

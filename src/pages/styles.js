import styled from "styled-components";
import p2v from '../utils/responsiveness';

export const Container = styled.section`
  width: 100vw;
  height: 100vh; 
  background-color: #000; 
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;  
  width: 100%;
  height: ${p2v(80)}; 
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderText = styled.h1`
  font-size: ${p2v(20)};
  margin-right: ${p2v(20)}; 
  width: 100%;
  color: #000;
`;

export const ImgBox = styled.div`
  width: ${p2v(20)};
  height: ${p2v(20)};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%; 

  ${(props) => props.notification && `
    width: 40%;
  `}
`;

export const Avatar = styled.img`
  width: ${p2v(40)}; 
  height: auto; 
  border-radius: ${p2v(20)}; 
  
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
    ${(props) => props.header && `
      margin-top: ${p2v(-15)}; 
      justify-content: flex-end;
      margin-right: ${p2v(15)}; 
    `}
  
`;

export const Column = styled.div`
  display: flex;
  position: fixed;
  background: rgb(225,243,244);
  background: linear-gradient(90deg, rgba(225,243,244,1) 0%, rgba(255,255,255,1) 25%, rgba(24,253,233,1) 95%, rgba(4,253,231,1) 100%, rgba(0,212,255,1) 100%);
  padding-left: ${p2v(15)};
  padding-top: ${p2v(15)};
  margin-bottom: ${p2v(15)};
  left: ${p2v(160)};
  top: ${p2v(1)};
  border-top: 3px solid #000;
  border-right: 3px solid #000;
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
  border-radius: 15px 15px 15px 15px; 
  flex-direction: column;
  overflow-y: scroll;
  z-index: 100;
  
  width: ${p2v(1180)};
  height: 95%;

  ${(props) => props.isColumnOpen && `
    width: ${p2v(1260)};  
    left: ${p2v(80)};
  `}
`;

export const SearchInput = styled.input`
  display: flex;
  width: 40%;
  height: 5vh;
  //#fbfcf8;
  border: 2px solid #fffada;
  border-radius: 50px;
  padding-left: 50px;
  background-color: #fff; 
  margin-left: 100px;
  margin-right: 100px;
  color: #fff;
`;

export const UserName = styled.h4`
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;
`;

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  width: ${p2v(48)}; 
  height: 100vh;
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw; 
  margin-top: 50px;
`;

export const RightBar = styled.div`
  display: flex;
  position: absolute;
  width: 20%;
  height: 89.5vh;
  bottom: 0px;
  right: 0px;
`;

export const SectionSummary = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  margin-top: 15px;
`;

export const SectionTasks = styled.div`
  display: flex;
  width: 100%;
  height: 35vh;
  margin-top: 15px;
`;



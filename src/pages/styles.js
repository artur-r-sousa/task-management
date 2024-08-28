import styled from "styled-components";
import p2v from '../utils/responsiveness';

export const Container = styled.section`
  width: 100vw;
  height: 100vh; 
  background-color: #151922; 
  display: flex;
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
  color: #fff;
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
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 40%;
  height: 5vh;
  border: none;
  border-radius: 50px;
  padding-left: 50px;
  background-color: #32527b; 
  margin-left: 100px;
  margin-right: 100px;
  color: #fff;
`;

export const UserName = styled.h4`
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
`;

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #ffee8c;
  width: ${p2v(160)}; 
  height: 100vh;
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



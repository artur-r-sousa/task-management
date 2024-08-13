import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
  background-color: #151922; 
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;  
  width: 100%;
  height: 10vh; 
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderText = styled.h1`
  font-size: 18px;
  margin-right: 100px;
  width: 100%;
  color: #fff;
`;

export const ImgBox = styled.div`


`;

export const Img = styled.img`
  width: 5%;
  height: 5%; 

  ${(props) => props.notification && `
    width: 40%;
  `}
`;

export const Avatar = styled.img`
  width: 40%;
  height: auto; 
  border-radius: 120px;
  
`;

export const Row = styled.div`
  width: 100%;
  height: 10vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
    ${(props) => props.header && `
      padding-left: 199px;
      margin-top: 1.5%;
      justify-content: flex-end;
    `}
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 56.5%;
  height: 100vh;
  top: 100px;
  left: 46vh;
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

export const SideBar = styled.div`
  display: flex;
  width: 30%;
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

export const SectionGraphs = styled.div`
  display: flex;
  width: 100%;
  height: 28vh;
  margin-top: 15px;
`;


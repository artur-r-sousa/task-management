import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
  background-color: #32527b; 
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;  
  width: 100%
  height: 10vh; 
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
`;

export const HeaderText = styled.h1`
  font-size: 18px;
  margin-right: 100px;
  width: 100%
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
      margin-top: -1.5%;
    `}
  
`;

export const SearchInput = styled.input`
  display: flex;
  width: 40%;
  height: 5vh;
  border-radius: 50px;
  border: 1px solid #000;
  padding-left: 50px;
  background-color: #32527b; 
  margin-left: 100px;
  margin-right: 100px;
`;

export const UserName = styled.h4`
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SideBar = styled.div`
  display: flex;
  width: 60%;
  height: 100vh;
  border: 2px solid #fff;
  margin-right: 10px;
`;
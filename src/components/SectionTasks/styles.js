import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 35vh;
  margin-top: 15px;
`;

export const Col = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

`;

export const ImgBox = styled.div`
  margin: 15px;
  width: 10%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 15%;
`;

export const SubText = styled.h4`
  font-size: 12px;
  color: #fff;
  ${(props) => props.title && `
    font-size: 18px;  
  `}
`;

export const BoxContainer = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: #24252b;

  ${(props) => props.addTask && `
    margin-left: 30px;
    width: 172%;
    padding: 30px;
    height: 100%;
  `}
`;

export const Rounded = styled.div`
  background-color: #000;
  border-radius: 30px;
  width: 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Circular = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 1vw;
  height: 2vh;
  display: flex;
  justify-content: center;

`;

export const UserInput = styled.input`
  display: flex;
  width: 40%;
  height: 5vh;
  border-radius: 5px;
  border: none;
  padding-left: 50px;
  background-color: #32527b; 
  color: #fff;
`;

export const SaveButton = styled.button`
  display: flex;
  width: 40%;
  height: 5vh;
  border-radius: 5px;
  background-color: #0c0a00; 
  border: none;
  justify-content: center;
  align-items: center;
`;
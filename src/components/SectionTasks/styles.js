import styled from "styled-components";
import p2v from "../../utils/responsiveness";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: ${p2v(300)};
  margin-top: ${p2v(15)};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

`;

export const Img = styled.img`
  width: 100%;
  height: 15%;
`;

export const SubText = styled.h4`
  font-size: ${p2v(10)};
  color: #fff;
  ${(props) => props.title && `
    font-size: ${p2v(15)};
  `}
`;

export const BoxContainer = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: #24252b;

  ${(props) => props.addTask && `
    margin-left: ${p2v(15)};
    width: 100%;
    padding: ${p2v(15)};
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
  margin: ${p2v(15)};
  padding-left: ${p2v(15)};
  padding-right: ${p2v(15)};
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
  height: ${p2v(35)};
  border-radius: ${p2v(5)};
  border: none;
  padding-left: ${p2v(15)};
  background-color: #32527b; 
  color: #fff;
`;

export const SaveButton = styled.button`
  display: flex;
  width: 40%;
  height: ${p2v(35)};
  border-radius: 5px;
  background-color: #0c0a00; 
  border: none;
  justify-content: center;
  align-items: center;
`;
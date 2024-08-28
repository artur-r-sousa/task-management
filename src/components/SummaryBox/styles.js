import styled from "styled-components";
import p2v from "../../utils/responsiveness";

export const Box = styled.div`
  width: 100%;
  height: ${p2v(120)};
  border-radius: ${p2v(15)};
  margin-right: ${p2v(15)};
  background-color: #24252b;
`;

export const Col = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: flex-start;
`;

export const ImgBox = styled.div`
  margin: ${p2v(10)};
  width: ${p2v(50)};
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 15%;
`;

export const SubText = styled.h4`
  font-size: ${p2v(11)};
  color: #fff;
`;

export const TextContainer = styled.div`
  width: ${p2v(150)};
  height: ${p2v(20)};
  
`;
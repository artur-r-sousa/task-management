import styled from "styled-components";
import p2v from '../../utils/responsiveness';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: ${p2v(180)};
  flex-direction: column;
  z-index: 90;
`;

export const Title = styled.h3`
  font-size: ${p2v(16)};
  color: #000;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

`;


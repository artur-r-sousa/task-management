import styled from "styled-components";
import p2v from '../../utils/responsiveness';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${p2v(30)};
`;

export const Label = styled.label`
  font-size: 15px;
  color: #fff;
  width: ${p2v(70)};
`;

export const FormInput = styled.input`
  font-size: 12px;
  height: ${p2v(15)};
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-left: 10px;
`;
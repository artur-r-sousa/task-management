import styled from "styled-components";
import p2v from "../../utils/responsiveness";
import { yellow1 } from "../../utils/colors";


export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  width: ${p2v(250)}; 
  height: 100vh;

  ${(props) => props.isColumnOpen && `
    background-color: #000; 
    width: ${p2v(50)}; 
  `}
`;

export const SideBarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${p2v(120)};
  height: 50px;
  margin-top: 15px;
  background-color: ${yellow1};
  
  border-radius: 0px 15px 15px 0px;
  align-items: center;
  justify-content: flex-start;
  color: #000;
  padding: ${p2v(5)};
  font-size: 17px;

  ${(props) => props.isColumnOpen && `
    border-radius: ${p2v(50)};  
    width: 120%;
    margin-left: 10px;
    justify-content: center;
    
    border-radius: 45px 45px 45px 45px;
    padding: 0px;
    font-size: 20px;
    height: 80px;
  `}

  ${(props) => props.isSelectedTab  && `
    border: 5px solid #fff;
    margin-left: 6px;
  `}

  ${(props) => props.isSelectedTab && !props.isColumnOpen && `
    margin-left: 0px;
  `}
`;

export const SidebarTitle = styled.p`
  font-weight: bold;
`;

export const SidebarIconBox = styled.div`
  width: ${p2v(18)};
  height: ${p2v(18)};
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
`;
export const SidebarIcon = styled.img`
  width: ${p2v(18)};
  height: ${p2v(18)};
`;
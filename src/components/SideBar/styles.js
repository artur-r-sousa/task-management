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
  height: ${p2v(40)};
  margin-top: ${p2v(12)};
  background-color: ${yellow1};
  
  border-radius: 0px ${p2v(5)} ${p2v(15)} 0px;
  align-items: center;
  justify-content: flex-start;
  color: #000;
  padding: ${p2v(5)};
  font-size: ${p2v(14)};

  ${(props) => props.isColumnOpen && `
    border-radius: ${p2v(50)};  
    width: 120%;
    margin-left: ${p2v(9)};
    justify-content: center;
    
    border-radius: ${p2v(45)};
    padding: 0px;
    font-size: ${p2v(16)};
    height: ${p2v(60)};
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
  margin-right: ${p2v(18)};
`;
export const SidebarIcon = styled.img`
  width: ${p2v(18)};
  height: ${p2v(18)};
`;
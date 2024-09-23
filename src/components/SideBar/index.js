import React, { useState } from "react";
import { Container, SideBarItemContainer, SidebarTitle, SidebarIcon, SidebarIconBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_CURR_TAB_TO, CHANGE_MAIN_COLUMN_STATE } from "../../app/modules/tasks/actions";

export default function SideBar() {

  const isColumnOpen = useSelector((state) => state.tasks.isMainColumnOpen);
  const currTabSelectedId = useSelector((state) => state.tasks.currSelectedTab);
  const dispatch = useDispatch();
  

  const SideBarItem = (props) => {
    console.log(currTabSelectedId)
    return (
       
      <SideBarItemContainer isColumnOpen={isColumnOpen} key={props.id} isSelectedTab={currTabSelectedId === props.id}>
        {!isColumnOpen && (
          <SidebarIconBox>
            <SidebarIcon src={props.imgString} />
          </SidebarIconBox>

        )}
        <SidebarTitle>{props.title}</SidebarTitle>
      </SideBarItemContainer>
    )
  }

  const dynamicBehavior = (propsTrue, propsFalse) => {
    return function DynamicComponent({ isColumnOpen }) {
      return isColumnOpen ?
        <>
          {propsTrue.map((item) => {
            return (
              <>
                <SideBarItem {...item} />
              </>
            )
          })}
        </>


        :
        <>
          {propsFalse.map((item) => {
            return (
              <>
                <SideBarItem {...item} />
              </>
            )
          })}
        </>
    };
  };

  const propsFalse = [
    {
      id: 1,
      title: 'Dashboard',
      imgString: require('../../assets/images/dashboard.png')
    },
    {
      id: 2,
      title: 'Projects',
      imgString: require('../../assets/images/dashboard.png')
    }

  ]


  const propsTrue = [
    {
      id: 1,
      title: 'D'
    },
    {
      id: 2,
      title: 'P'
    }
  ]

  const DynamicComponent = dynamicBehavior(propsTrue, propsFalse)

  return (
    <Container
      isColumnOpen={isColumnOpen}
      onMouseOver={() => dispatch(CHANGE_MAIN_COLUMN_STATE())}
      onMouseLeave={() => dispatch(CHANGE_MAIN_COLUMN_STATE())}
    >{isColumnOpen ? 'imagem' : 'titulo da opção'}
      <DynamicComponent isColumnOpen={isColumnOpen} />
    </Container>
  )
}

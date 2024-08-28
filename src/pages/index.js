import React from "react";
import {
  Avatar,
  Column,
  Container,
  Header,
  HeaderText,
  Img,
  ImgBox,
  RightBar,
  Row,
  SearchInput,
  SideBar,
  UserName
} from "./styles";
import SectionSummary from "../components/SectionSummary";
import SectionTasks from "../components/SectionTasks";

export default function Home() {
  return (
    <Container>
      <Row>
        <SideBar>teste</SideBar>
        <Column>
          <Header>
            <HeaderText>Hi Wade Wilson!</HeaderText>
            <SearchInput />


            <Row header>
              <Avatar src={require('../assets/images/avatar_1.jpeg')} />
              <UserName>Wade</UserName>
              <ImgBox>
                <Img src={require('../assets/images/icon_menu_open.png')} />
              </ImgBox>
            </Row>

          </Header>
          <RightBar />
          <SectionSummary />
          <SectionTasks />
        </Column>
      </Row>


    </Container>
  )
}
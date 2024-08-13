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
  SectionGraphs,
  SideBar,
  UserName
} from "./styles";
import SectionSummary from "../components/SectionSummary";
import SectionTasks from "../components/SectionTasks";

export default function Home() {
  return (
    <Container>
      <SideBar>teste</SideBar>
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
      <Column>
        <SectionSummary />
        <SectionTasks />
        <SectionGraphs />
      </Column>
    </Container>
  )
}
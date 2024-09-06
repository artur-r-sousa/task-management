import React from "react";
import {
  Avatar,
  Column,
  Container,
  Footer,
  Header,
  HeaderText,
  Img,
  ImgBox,
  RightBar,
  Row,
  UserName
} from "./styles";
import SectionSummary from "../components/SectionSummary";
import SectionTasks from "../components/SectionTasks";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";


export default function Home() {
  const isColumnOpen = useSelector((state) => state.tasks.isMainColumnOpen);
  return (
    <Container>
      <Row>
        <SideBar/>
        <Column isColumnOpen={isColumnOpen}>
          <Header>
            <HeaderText>Hi Wade Wilson!</HeaderText>
            {/* <SearchInput /> */}


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
          <SectionSummary />
          <SectionTasks />

          <Footer />
        </Column>
      </Row>


    </Container>
  )
}
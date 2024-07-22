import React from "react";
import { Avatar, Container, Header, HeaderText, Img, ImgBox, Row, SearchInput, SideBar, UserName } from "./styles";

export default function Home() {
  return (
    <Container>
      <SideBar>teste</SideBar>
      <Header>
        <HeaderText>Hi Wade Wilson!</HeaderText>
        <SearchInput />
        <ImgBox header>
          <Img notification src={require('../assets/images/notification.png')} />
        </ImgBox>
        
        <Row header>
          <Avatar src={require('../assets/images/avatar_1.jpeg')} />
          <UserName>Wade</UserName>
          <ImgBox>
            <Img src={require('../assets/images/icon_menu_open.png')} />
          </ImgBox>
        </Row>

      </Header>
    </Container>
  )
}
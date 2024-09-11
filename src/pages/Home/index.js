import React, { useEffect } from "react";
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
import SectionSummary from "../../components/SectionSummary";
import SectionTasks from "../../components/SectionTasks";
import { useSelector } from "react-redux";
import SideBar from "../../components/SideBar";


export default function Home() {
  const isColumnOpen = useSelector((state) => state.tasks.isMainColumnOpen);
  const userName = useSelector((state) => state.tasks.data.user_data.user_first_name) + " " + useSelector((state) => state.tasks.data.user_data.user_last_name);
  const userFirstName = useSelector((state) => state.tasks.data.user_data.user_first_name);

  useEffect(() => {
    console.log(userName)
  }, [userName])

  return (
    <Container>
      <Row>
        <SideBar/>
        <Column isColumnOpen={isColumnOpen}>
          <Header>
            <HeaderText>Hi {userName}!</HeaderText>
            {/* <SearchInput /> */}


            <Row header>
              <Avatar src={require('../../assets/images/avatar_1.jpeg')} />
              <UserName>{userFirstName}</UserName>
              <ImgBox>
                <Img src={require('../../assets/images/icon_menu_open.png')} />
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
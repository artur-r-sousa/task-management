import React from "react";
import { BoxContainer, Circular, Col, Container, Rounded, Row, SaveButton, SubText, UserInput } from "./styles";

export default function SectionTasks() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Rounded>
              <SubText>To do</SubText>
              <Circular>8</Circular>
            </Rounded>
          </Row>
          <BoxContainer>
            <Col>
              <Row>
                <SubText>User Interview</SubText>
              </Row>
              <Row>
                <SubText>i want to find user interviews for research</SubText>
              </Row>
            </Col>

          </BoxContainer>

        </Col>
        <Col>
          <BoxContainer addTask>
            <SubText title>Add new task</SubText>
            <SubText >Title</SubText>
            <Row>
              <UserInput />
              <SaveButton onClick={() => {}}>
                <SubText>Save</SubText>
              </SaveButton>
            </Row>

            <SubText >Subtitle</SubText>
            <UserInput />
          </BoxContainer>
        </Col>
        <Col>

        </Col>
      </Row>

    </Container>
  )
}
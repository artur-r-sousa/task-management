import React, { useEffect } from "react";
import { BoxContainer, Circular, Col, Container, Rounded, Row, SaveButton, SubText, UserInput } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { GET_TASKS_REQUEST } from "../../app/modules/tasks/actions";

export default function SectionTasks() {

  const dispatch = useDispatch()
  
  
  const tasks = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(GET_TASKS_REQUEST())
    console.log('taskState', tasks)
  }, [])

  
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Rounded>
              <SubText>To do</SubText>
              <Circular>{tasks.data.in_progress ? tasks.data.in_progress.length : 0}</Circular>
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
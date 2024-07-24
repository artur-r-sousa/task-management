import React from "react";
import { Container, Row, Title } from "./styles";
import SummaryBox from "../SummaryBox";

export default function SectionSummary() {
  return (
    <Container>
      <Title>Project Summary</Title>

      <Row>
        <SummaryBox copy={
          {
            'subTextId0': 'New',
            'subTextId1': 'Task Assigned',
            'subTextId2': '10',
            'subTextId3': '+15% from yesterday',
          }
        }/>
        <SummaryBox copy={
          {
            'subTextId0': 'Tasks',
            'subTextId1': 'Completed',
            'subTextId2': '15',
            'subTextId3': '-5% from yesterday',
          }
        }/>
        <SummaryBox copy={
          {
            'subTextId0': 'Project',
            'subTextId1': 'Completed',
            'subTextId2': '20',
            'subTextId3': '+5% from yesterday',
          }
        }/>
      </Row>

    </Container>
  )
}
import React from "react";
import { Box, Col, Img, ImgBox, Row, SubText, TextContainer } from "./styles";

export default function SummaryBox({ copy }) {
  return (
    <Box>
      <Col>
        <Row>
          <ImgBox>
            <Img src={require('../../assets/images/file-and-folder.png')} />
          </ImgBox>
          <Col>
            <TextContainer>
              <SubText>{copy.subTextId0}</SubText>
            </TextContainer>
            <TextContainer>
              <SubText>{copy.subTextId1}</SubText>
            </TextContainer>

          </Col>
        </Row>
        <Row>
          <TextContainer>
            <SubText>{copy.subTextId2}</SubText>
          </TextContainer>
          <TextContainer>
            <SubText>{copy.subTextId3}</SubText>
          </TextContainer>
        </Row>
      </Col>

    </Box>
  )
}
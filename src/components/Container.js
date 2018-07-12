import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.section`
display: grid;
height: 100%;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-template-areas: "Hero Hero Hero Hero" "Button1 Button2 TextMeTheApp TextMeTheApp" "Footer Footer Footer Footer";
`

const Container = props => {
  return <GridContainer>{props.children}</GridContainer>
}

export default Container

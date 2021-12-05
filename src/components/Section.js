import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
        </Fade>
            
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
             
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                {
                    props.rightbtnText &&
                    <RightButton>
                   {props.rightbtnText}
                </RightButton>
                }
            </ButtonGroup>
            </Fade >
            <DownArrow src="/images/down-arrow.svg"/> 
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
   width: 100vw;
   height: 100vh;
   background-size:cover; 
   background-position: center;
   background-repeat: no-repeat;
   background-image:url('/images/model-s.jpg');
   display:flex;
   flex-direction:column;
   justify-content:space-between; // vertial
   align-items:center; // horizontal
   background-image:${props=> `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
   z-index:-1;
`

const ButtonGroup = styled.div`
   display:flex;
   margin-buttom:50px;
   @media(max-width:768){
       flex-direction:column;
   }
   
`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pionter;
  margin:8px;
  color:white;
  


`
const RightButton = styled(LeftButton)`
  background:white;
  opacity:0.65;
  color:black;

`

const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation: animation infinite 1.5s;
    padding-left:250px;

`

const Buttons = styled.div`
`


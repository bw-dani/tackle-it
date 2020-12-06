import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Profile from './Profile';
import Menu from './menu/Menu';
import ToggleSwitch from './ToggleSwitch'
import './sidebar.css'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-device-width: 280px) and (max-device-width: 812px){
      width: 100%;
      // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:3rem;
  margin: 0;
  text-align: center;
  display: flex;
    flex-direction: row;
     
    }
    `



export default function Sidebar(props) {


  const { currentUser } = props;
  return (
   
    <Container className='media-query'>
      <Profile currentUser={currentUser}/>
            <Menu />
            <ToggleSwitch />
      </Container>
   
  )
}
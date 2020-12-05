import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Profile from './Profile';
import Menu from './menu/Menu';
import ToggleSwitch from './ToggleSwitch'

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
    `

export default function Sidebar(props) {


  const { currentUser, handleLogout } = props;
  return (
    <Container>
      <Profile currentUser={currentUser}/>
            <Menu />
            <ToggleSwitch />
        </Container>
  )
}
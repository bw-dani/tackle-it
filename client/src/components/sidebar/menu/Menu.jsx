import React from 'react'
import {Link} from 'react-router-dom'
import MenuLink from './MenuLink'
import styled from 'styled-components'




const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
      <Container> 
        <Link to={'/homepage'}><MenuLink  title="Home" icon={'home'}/></Link> 
        <Link to={'/tasks/new'}><MenuLink title="To-Do" icon={'file-multiple'}  /></Link>
        <Link to={'/settings'}><MenuLink title="Settings" icon={'cog'}  /></Link>
      </Container>
    )
}

export default Menu
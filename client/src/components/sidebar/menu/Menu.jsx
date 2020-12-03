import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Home" icon={'home'}/>
            <MenuLink title="To-Do" icon={'file-multiple'} active />
            <MenuLink title="Done" icon={'gift'}/>
            <MenuLink title="Settings" icon={'bank'}/>
        </Container>
    )
}

export default Menu
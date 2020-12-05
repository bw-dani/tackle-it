import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    margin-top: 5rem;
    padding-bottom: 2rem;
    text-align: center;
`

const ProfileImg = styled.img`
    alignSelf: center,
    height: 5rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = (props) => {

  const userImg = {
    borderRadius: '50%',
    width: '80%',
    height: '105%',
    // paddingLeft: '10%',
    // paddingRight: '10%'
  }
 
  const { currentUser } = props;
 
    return (
      <Container>
       
        <ProfileImg  style={userImg} src={currentUser?.image_url} />
       <ProfileName >{currentUser?.name}</ProfileName>
        
        </Container>
    )
}

export default Profile
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    margin-top: 5rem;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (min-device-width: 280px) and (max-device-width: 812px){
      // height:1rem;
      display:flex;
      flex-directiom:row;
      padding-bottom:0;
      margin-left:3rem;
      padding-top:2px;
      margin-right: 3%;
      margin-top: 0;
    }
    
`

const ProfileImg = styled.img`
    alignSelf: center,
    height: 5rem;
    @media only screen and (min-device-width: 280px) and (max-device-width: 812px){
      display:none;
      height:1rem;
    }
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
    @media only screen and (min-device-width: 280px) and (max-device-width: 812px){
      font-size: 0.5rem

    }
`

const Profile = (props) => {

  const userImg = {
    borderRadius: '50%',
    width: '50%',
    height: '75%',
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
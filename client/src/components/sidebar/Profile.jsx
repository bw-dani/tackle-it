import React from 'react'
import styled from 'styled-components'
// import Image from '../../assets/images/profilelg.png'

const Container = styled.div`
    margin-top: 5rem;
`

const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = (props) => {
  const { currentUser} = props;
    return (
        <Container>
        {/* <ProfileImg src={Image} /> */}
        <div>
          {
            currentUser ?
              <>
                <p>{currentUser?.name}</p>
              </>
              :
              <p>{currentUser?.username}</p>
        }
            
           
        
        </div>
        </Container>
    )
}

export default Profile
import React from 'react'
import IconHotlineCat from '../icons/IconHotlineCat'
import Telephone from '../Address/Telephone'
import Address from '../Address/Address'
import './Details.scss'

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
const AddressContainer = styled.div `
  display: grid;
  grid-template: auto auto / auto;
`
const IconCat = styled.div `
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

const Card = styled.div `
  position: relative;
  background-color: ${props => props.theme.colors.primary5};
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media screen and (min-width: 1024px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 823px) {
    padding: 20px 0;
    width: 93%;
  }
`

const Details = props => {
  return (
    <Container>
      <Card>
        <AddressContainer>
          <Address/>
          <Telephone/>
        </AddressContainer>
        <a href="tel:+49-221-721-64-35" aria-label='Make a phone call' style={{alignSelf: 'center', justifySelf: 'center'}}>
          <IconCat>
            <IconHotlineCat width='100'/>
          </IconCat>
        </a>
      </Card>
    </Container>
  )
}

export default Details

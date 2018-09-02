import React from 'react'
import Phone from '../icons/Phone'
import Responsive from 'react-responsive'
import './Adress.scss'

const Mobile = props => <Responsive {...props} maxWidth={767} orientation={'portrait'}/>
const MobileLandscape = props => (
  <Responsive {...props} maxWidth={823} orientation={'landscape'} />
)
const DefaultGeneral = props => <Responsive {...props} minWidth={768} />

const Container = styled.div`
  display: grid;
  grid-template: auto / 1fr 3fr;
`
const TelephoneNumber = styled.div`
  grid-column: 2;
  align-self: center;
  @media screen and (min-width: 1024px) {
    font-size: 1.425em;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.6em;
  }
  @media screen and (max-width: 823px) and (orientation: landscape) {
    font-size: .8em;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1.425em;
  }
  p {
    margin: 2px;
  }
`
const IconPhone = styled.div`
  grid-column: 1;
  align-self: center;
  justify-self: center;
`

const Telephone = props => {
  return (
    <Container>
      <IconPhone>
        <DefaultGeneral>
          <Phone width="36" height="36" fill="whitesmoke" />
        </DefaultGeneral>
        <Mobile>
          <Phone width="24" height="24" fill="whitesmoke" />
        </Mobile>
        <MobileLandscape>
          <Phone width="24" height="24" fill="whitesmoke" />
        </MobileLandscape>
      </IconPhone>
      <TelephoneNumber>
        <p>T +49 221 721 64 35</p>
        <p>T +49 221 997 532 39</p>
        <p>M +49 179 731 94 55</p>
      </TelephoneNumber>
    </Container>
  )
}

export default Telephone

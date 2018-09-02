import React from 'react'
import MapMarker from '../icons/MapMarker'
import Responsive from 'react-responsive'
import './Adress.scss'

const Mobile = props => <Responsive {...props} maxWidth={767} orientation={'portrait'} />
const MobileLandscape = props => (
  <Responsive {...props} maxWidth={823} orientation={'landscape'} />
)
const DefaultGeneral = props => <Responsive {...props} minWidth={768} />

const Container = styled.div`
  display: grid;
  grid-template: auto / 1fr 3fr;
`
const StreetAddress = styled.div`
  grid-column: 2;
  align-self: center;
  @media screen and (max-width: 414px) {
    font-size: 0.7em;
  }
  @media screen and (max-width: 823px) and (orientation: landscape) {
    font-size: .8em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.425em;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1.425em;
  }
  p {
    margin: 2px;
  }
`

const IconMarker = styled.div`
  grid-column: 1;
  align-self: center;
  justify-self: center;
`

const Address = props => {
  return (
    <Container>
      <IconMarker>
        <DefaultGeneral>
          <MapMarker width="36" height="36" fill="whitesmoke" />
        </DefaultGeneral>
        <Mobile>
          <MapMarker width="24" height="24" fill="whitesmoke" />
        </Mobile>
        <MobileLandscape>
          <MapMarker width="24" height="24" fill="whitesmoke" />
        </MobileLandscape>
      </IconMarker>
      <StreetAddress>
        <p>Blumenhaus Georg</p>
        <p>Gladbacher Str. 17-19,</p>
        <p>50672 Köln</p>
      </StreetAddress>
    </Container>
  )
}

export default Address

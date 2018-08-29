import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import './menu.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
const MenuItem = styled.a`
  margin-bottom: 10px;
  background: ${props =>
    props.active ? 'rgba(133, 112, 153, 0.9)' : 'rgba(102,51,153,.8)'};
  color: ${props => (props.active ? 'white' : 'whitesmoke')};
  z-index: 1200;
` 
const SubMenu = styled.div`
  padding: 0 10px;
  z-index: 1200;  
`
const SubmenuItem = styled(Link)`
  margin-bottom: 5px;
`

const items = [
  { title: 'blume', key: 'flower' },
  { title: 'farbe', key: 'color' },
  { title: 'anlass', key: 'occasion' },
]

const navitems = {
  occasion: [
    { id: 0, title: 'Hochzeit', key: 'occasion' },
    { id: 1, title: 'Geburtstag', key: 'occasion' },
    { id: 2, title: 'Buero', key: 'occasion' },
    { id: 3, title: 'Beerdigung', key: 'occasion' },
    { id: 4, title: 'Event', key: 'occasion' },
    { id: 5, title: 'Weihnachten', key: 'occasion' },
    { id: 6, title: 'Einfachso', key: 'occasion' },
  ],
  flower: [
    { id: 0, title: 'Rose', key: 'flower' },
    { id: 1, title: 'Lilie', key: 'flower' },
    { id: 2, title: 'Tulpe', key: 'flower' },
    { id: 3, title: 'Strelizie', key: 'flower' },
    { id: 4, title: 'Pfingstrose', key: 'flower' },
    { id: 5, title: 'Sonnenblume', key: 'flower' },
    { id: 6, title: 'Orchidee', key: 'flower' },
    { id: 7, title: 'Dahlia', key: 'flower' },
    { id: 8, title: 'Nelke', key: 'flower' },
    { id: 9, title: 'Chrysantheme', key: 'flower' },
  ],
  color: [
    { id: 0, title: 'rot', key: 'color' },
    { id: 1, title: 'weiss', key: 'color' },
    { id: 2, title: 'gelb', key: 'color' },
    { id: 3, title: 'gruen', key: 'color' },
    { id: 4, title: 'violett', key: 'color' },
    { id: 5, title: 'bunt', key: 'color' },
    { id: 6, title: 'rosa', key: 'color' },
  ],
}

export default class NestedMenu extends PureComponent {

  state = { openKey: undefined }

  onOpenChange = e => {
    const nextOpenKey =
      e.target.textContent === 'blume'
        ? 'flower'
        : e.target.textContent === 'farbe'
          ? 'color'
          : 'occasion'

    if (
      !this.state.openKey ||
      (this.state.openKey && this.state.openKey !== nextOpenKey)
    ) {
      this.setState(state => ({ openKey: nextOpenKey }))
    } else {
      this.setState(state => ({ openKey: undefined }))
    }
  }

  onNavigation = () => {
    this.setState({ openKey: undefined })
    this.props.toggle()
  }

  render() {
    const { visible } = this.props
    const { openKey } = this.state

    return (
      <Container>
        {!visible ? null : (
          <Fragment>                 
            <div>
              {items.map((item, i) => (
                <MenuItem className="button is-primary is-fullwidth" 
                  onClick={this.onOpenChange}
                  key={item.key}
                  active={openKey === item.key}
                >               
                  {item.title}              
                </MenuItem>
              ))} 
            </div>           
            {openKey !== undefined ? (
              <SubMenu className="panel slideInLeft">                  
                {navitems[openKey].map(submenuitem => (
                  <SubmenuItem
                    className="panel-block button is-link"
                    onClick={this.onNavigation}
                    key={submenuitem.id}
                    to={`/${submenuitem.title.toLowerCase()}/`}
                  >
                    {submenuitem.title}
                  </SubmenuItem>
                ))}                        
              </SubMenu>
            ) : null}        
          </Fragment>
        )}
      </Container>
    )
  }
}

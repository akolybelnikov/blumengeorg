import React, { PureComponent, Fragment } from 'react'
import Link from 'gatsby-link'
import './menu.scss'
import NAVITEMS from '../navitems'

const items = [
  { title: 'blume', key: 'flower' },
  { title: 'farbe', key: 'color' },
  { title: 'anlass', key: 'occasion' },
]

const navitems = NAVITEMS

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
    this.props.toggle()
  }

  render() {
    const { visible } = this.props
    const { openKey } = this.state

    return (
      <div id="nested-menu-container">
        {!visible ? null : (
          <Fragment>                 
            <div>
              {items.map((item, i) => (
                <button className="button is-primary is-medium is-fullwidth nested-menu-item" 
                  onClick={this.onOpenChange}
                  key={item.key}
                >               
                  {item.title}              
                </button>
              ))} 
            </div>           
            {openKey !== undefined ? (
              <div id="nested-menu-submenu" className="panel">                  
                {navitems[openKey].map(submenuitem => (
                  <Link
                    className="panel-block button is-link is-medium nested-submenu-item"
                    onClick={this.onNavigation}
                    key={submenuitem.id}
                    to={`/${submenuitem.title.toLowerCase()}/`}
                  >
                    {submenuitem.title}
                  </Link>
                ))}                        
              </div>
            ) : null}        
          </Fragment>
        )}
      </div>
    )
  }
}

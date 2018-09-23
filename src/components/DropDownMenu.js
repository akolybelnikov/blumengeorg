import React from 'react'
import './DropDownMenu.scss'
import Link from 'gatsby-link'

const DropdownMenu = props => {

  const {list, title, listOpen, toggleList} = props

  return (
    <nav className="navbar">
      <div className="navbar-item has-dropdown" onClick={toggleList}>
        <div role="menuitem" aria-label="dropdown menu header" className="navbar-link" id="header-title">{title}</div>
      </div>
      {listOpen && 
        <div id="dropdown-list" className="dropdown-menu">
            {list.map(item => (
              <Link className="navbar-item dropdown-list-item" key={item.id} to={`/${item.title.toLowerCase()}/`} onClick={toggleList}>
                {item.title}
              </Link>
            ))}
        </div>
      }
    </nav>
  )

}

export default DropdownMenu

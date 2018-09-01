import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div `
  cursor: pointer;
  min-width: 150px;

`
const HeaderTitle = styled.a `
  color: white !important;
  :hover {
    color: #663399 !important;
  }
  min-width: 150px;
`
const List = styled.div `
  position: absolute;
`
const Item = styled(Link)`
  color: white !important;
  background: rgba(101,55,148,.7);
  :hover {
    color: #663399 !important;
  }
  min-width: 150px;
`

const DropdownMenu = props => {

  const {list, title, listOpen, toggleList} = props

  return (
    <Wrapper>
      <div className="navbar-item has-dropdown" onClick={toggleList}>
        <HeaderTitle className="navbar-link">{title}</HeaderTitle>
      </div>
      {listOpen && 
        <List className="dropdown-menu">
            {list.map(item => (
              <Item className="navbar-item" key={item.id} to={`/${item.title.toLowerCase()}/`} onClick={toggleList}>
                {item.title}
              </Item>
            ))}
        </List>
      }
    </Wrapper>
  )

}

export default DropdownMenu

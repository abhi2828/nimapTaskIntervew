import React from 'react'
import './header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" >Logo</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="ul_list">
                  <li className="item_list">
                    <NavLink exact activeClassName='menu_item1 active' to='/' > Home</NavLink>
                  </li>
                  <li className="item_list">
                    <NavLink exact activeClassName='menu_item2 active' to='/Task' > Task</NavLink>
                  </li>
                  <li className="item_list">
                    <NavLink exact activeClassName='menu_item3 active' to='/User' > User</NavLink>
                  </li>
                </ul>             
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Header


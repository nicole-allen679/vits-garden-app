import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="#" className="brand-logo">
          Vitoria's Gardens
        </Link>
        <ul id="#" className="right hide-on-med-and-down">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { container, navContainer, link } from './styles.css'

const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
      <li>{'NEW SHEET'}</li>
      <li><Link className={link} to='sign_out'>{'Sign Out'}</Link></li>
    </ul>
    : <ul>
      <li>{'SIGN IN COMPONENT'}</li>
      <li><Link className={link} to='/sign_up'>{'Sign Up'}</Link></li>
    </ul>
}

const NavLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
    </ul>
    : <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
    </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks isAuthed={isAuthed}/>
      </nav>
    </div>
  )
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

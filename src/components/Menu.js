import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/landing">Landing</Link></li> */}
                <li><Link onClick={props.onToggleMenu} to="/elements">About the project</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/upload">Contribute your art</Link></li> */}
                <li><Link onClick={props.onToggleMenu} to="/partners">Partners</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Contribute your art</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

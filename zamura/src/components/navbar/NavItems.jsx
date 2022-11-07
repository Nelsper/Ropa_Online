import { Link } from 'react-router-dom'

const NavItems = ( { navItems } ) => {
  return (
    navItems.map(({ruta, icon, title}) => {
        return (
            <li className='nav-item' key={ title }>
                <Link className='nav-link' to={ruta} >
                    <i className={icon} style={{ margin: "5px"}}/>
                    {title}
                </Link>
            </li>
        )
    })
  )
}

export default NavItems
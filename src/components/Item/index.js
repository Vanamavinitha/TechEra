import {Link} from 'react-router-dom'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <li className="Li">
      <Link to={`/courses/${id}`} className="link-el">
        <img className="Ci" src={logoUrl} alt={name} />
        <p className="Cn">{name}</p>
      </Link>
    </li>
  )
}

export default Item

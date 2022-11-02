import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Nav } from 'react-bootstrap'

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card-container">
        <img src={teamImageUrl} className="team-card-image" alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

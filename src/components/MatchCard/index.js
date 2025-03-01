// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} =
    matchCardDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-competing-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

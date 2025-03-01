// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchesDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchesDetails

  return (
    <div className="latest-matches-container">
      <h1 className="latest-matches-title">Latest Matches</h1>
      <div className="latest-matches-card">
        <div className="latest-matches-left-logo-image-container">
          <div className="competing-team-date-venue-result-container">
            <p className="latest-Matches-competing-team">{competingTeam}</p>
            <p className="latest-Matches-date">{date}</p>
            <p className="latest-Matches-venue">{venue}</p>
            <p className="latest-Matches-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-matches-image"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="latest-matches-right-container">
          <p className="latest-Matches-first-innings-label">First Innings</p>
          <p className="latest-Matches-first-innings-value">{firstInnings}</p>
          <p className="latest-Matches-second-innings-label">Second Innings</p>
          <p className="latest-Matches-second-innings-value">{secondInnings}</p>
          <p className="latest-Matches-Man-of-the-match-label">
            Man of the Match
          </p>
          <p className="latest-Matches-Man-of-the-match-value">
            {manOfTheMatch}
          </p>
          <p className="latest-Matches-umpires-label">umpires</p>
          <p className="latest-Matches-umpires-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

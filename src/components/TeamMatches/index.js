// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.getTeamFormattedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(each =>
        this.getTeamFormattedData(each),
      ),
    }
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerURL, latestMatch, recentMatches} = teamMatchesData
    const className = `team-matches-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="responsive-container">
            <img
              src={teamBannerURL}
              className="team-matches-image"
              alt="team banner"
            />
            <LatestMatch latestMatchesDetails={latestMatch} />
            <ul className="team-matches-list-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchCardDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

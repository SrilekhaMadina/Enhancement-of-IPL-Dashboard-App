// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="ipl-name-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-icon-image"
            alt="ipl logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ipl-list-details-container">
            {teamsData.map(eachData => (
              <TeamCard key={eachData.id} teamCardDetails={eachData} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home

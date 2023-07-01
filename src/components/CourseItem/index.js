import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Item from '../Item'

import './index.css'

const apiStatus = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fail: 'fail',
}

class CourseItem extends Component {
  state = {api: apiStatus.initial, courseList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({api: apiStatus.loading})
    const url = ' https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formatData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: formatData, api: apiStatus.success})
    } else {
      this.setState({api: apiStatus.fail})
    }
  }

  loadingView = () => (
    <div data-testid="loader" className="loader-con">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {courseList} = this.state
    return (
      <div className="s-con">
        <h1 className="header">Courses</h1>
        <ul className="ListCon">
          {courseList.map(i => (
            <Item details={i} key={i.id} />
          ))}
        </ul>
      </div>
    )
  }

  failView = () => (
    <div>
      <Link to="/" className="link-el">
        <nav className="Nav">
          <img
            className="Logo"
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </nav>
      </Link>
      <div className="FailContainer">
        <img
          className="FailImage"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <h1 className="h">Oops! Something Went wRONG</h1>
        <p className="p">We cannot seem to find the page you are looking for</p>
        <button className="b" type="button" onClick={this.getData}>
          Retry
        </button>
      </div>
    </div>
  )

  finalRender = () => {
    const {api} = this.state
    switch (api) {
      case apiStatus.loading:
        return this.loadingView()
      case apiStatus.success:
        return this.successView()
      case apiStatus.fail:
        return this.failView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Link to="/" className="link-el">
          <nav className="Nav">
            <img
              className="Logo"
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </nav>
        </Link>
        {this.finalRender()}
      </div>
    )
  }
}

export default CourseItem

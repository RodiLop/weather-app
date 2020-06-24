import React, { Component } from 'react'

class WeekView extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: null,
            isData: false
        }
    }

    // test coordinates: 26.135152, -80.291174
    componentDidMount = () => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=26.135152&lon=-80.291174&exclude=hourly,minutely&appid=' + process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res,
                isData: true
            })
        })
        .catch(err => {
            console.log('there was an error' + err)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Hello from week view</h1>
                {this.state.isData ? <p>Data loaded</p> : <p>Data is loading...</p>}
            </div>
        )
    }
}

export default WeekView
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            position: {
                lat: null,
                lon: null
            },
            isLocated: false
        }
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (pos) => {
                const currPost = {...this.state.position}
                currPost.lat = pos.coords.latitude
                currPost.lon = pos.coords.longitude
                console.log(pos)
                console.log(currPost)
                this.setState({ position: {...currPost}, isLocated: true })
            })
        }
    }

    render() {

        var Dis = null
        if (this.state.isLocated) {
            Dis =
            <div>
                <h1>Is located</h1>
            </div>
        } else {
            Dis =
            <div>
                <button type="button" onClick={() => this.getLocation()}>Get Location</button>
            </div>
        }

        console.log(this.state)
        return (
            <div>
                {Dis}
            </div>
        )
    }
}

export default Home
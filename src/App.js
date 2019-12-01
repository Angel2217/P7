import React from 'react';
import './App.css';
import MyMap from './MyMap';
import List from './List';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      restaurants: [],
      locations: []
    })
  }

  componentDidMount() {
    fetch('./Restaurants.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          restaurants: data,
          locations: data.map((restaurant) =>
            ({ lat: restaurant.lat, long: restaurant.long }))
        })
      });
  }


  render() {
    return <div id='wrapper'>
      <MyMap locations={this.state.locations} />
      <List restaurants={this.state.restaurants} />
    </div>
  }
}

export default App;

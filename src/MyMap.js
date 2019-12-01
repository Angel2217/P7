import React from 'react';
import L from 'leaflet';


class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            center: [51.505, -0.09],
            zoom: 14
        })
    }


    componentDidMount() {
        this.map = L.map('map', {
            center: this.state.center,
            zoom: this.state.zoom
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(this.map);

        this.getLocation();
    }


    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    }


    showPosition = (position) => {
        let markerOptions = {
            radius: 13,
            color: '#e02300'
        }
        let currentPosition = new L.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(currentPosition);
        L.circleMarker(currentPosition, markerOptions).addTo(this.map);
    }


    componentDidUpdate() {
        this.props.locations.map((location) =>
            L.marker([location.lat, location.long]).addTo(this.map))
    }


    render() {
        return <div id='map'></div>
    }
}






export default MyMap;
import React from 'react';


class List extends React.Component {

    render() {
       
        return (
            <ul>
                {this.props.restaurants.map((restaurant, index) =>
                    <li key={index}>
                        <p>{restaurant.restaurantName}</p>
                        <p>Average rating: {+(restaurant.ratings.map((rating) =>
                            rating.stars).reduce((total, currentValue) => {
                                return total + currentValue}, 0) / restaurant.ratings.length).toFixed(2)
                        }</p>
                    </li>)}
            </ul>

        )
    }


}


export default List;
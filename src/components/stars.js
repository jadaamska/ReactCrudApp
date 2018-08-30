import React, {Component} from 'react';

class Stars extends Component {
    state = {
        star: this.props.currentStarState
    }

    setRating(id) {
        if(id === this.state.star){
            this.setState({star: null})
            this.props.changeRating(null)
        } else {
            this.setState({star: id})
            this.props.changeRating(id)
        }
    }

    render() {
        const starArray = [1,2,3,4,5];

        return (
            <div className="stars">
                {
                    starArray.map(item => <i key={item}
                                             onClick={() =>  this.setRating(item)}
                                             className={item <= this.state.star
                                                 ? "fas fa-star red"
                                                 : "fas fa-star"}/>)}
            </div>
        )
  }
}

export default Stars;
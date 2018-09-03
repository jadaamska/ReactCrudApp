import React, {Component} from 'react';
import axios from 'axios';
import Stars from "./stars";

class AddAnime extends Component {

    myFormRef = '';

    state = {
        title: '',
        author: '',
        rating: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChangeRating = id => {
        this.setState({ rating: id });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:4000/series`, { ...this.state })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.add(res.data);
                this.myFormRef.reset();
            })
    }

    render() {
        return (
            <div>
                <form ref={(item) => this.myFormRef = item} className="input-field" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" placeholder="anime-title"
                               name="title"
                               aria-label="anime-title" aria-describedby="button-addon2" onChange={this.handleChange} />
                        <input type="text" className="form-control" placeholder="anime-author"
                               name="author"
                               aria-label="anime-author" aria-describedby="button-addon2" onChange={this.handleChange} />
                        <Stars changeRating={this.handleChangeRating} currentStarState={0}/>
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                </form>
            </div>
        )
    }
}

export default AddAnime;
import React, {Component} from 'react';
import axios from 'axios';

class DeleteAnime extends Component {
    state = {
        id: this.props.id
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:4000/series/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" onChange={this.handleChange} >Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteAnime;
//<i onClick={this.handleChange} className="fas fa-trash-alt" />
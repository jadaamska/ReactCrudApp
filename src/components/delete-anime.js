import React, {Component} from 'react';
import axios from 'axios';

class DeleteAnime extends Component {
    state = {
        id: this.props.id
    }

    // handleChange = event => {
    //     this.setState({ id: event.target.value });
    // }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:4000/series/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.removeItem(this.state.id);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-trash-alt"/></button>
                </form>
            </div>
        )
    }
}

export default DeleteAnime;
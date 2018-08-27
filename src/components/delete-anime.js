import React, {Component} from 'react';
import axios from 'axios';

class DeleteAnime extends Component {

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:4000/series/${this.props.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.removeItem(this.props.id);
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
import React, {Component} from 'react';
import axios from 'axios';

class EditAnime extends Component {
    state = {
        title: this.props.titleToEdit,
        author: this.props.authorToEdit
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        axios.put(`http://localhost:4000/series/${this.props.idToEdit}`, {
            title: this.state.title,
            author: this.state.author
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }


    render(){
        return (
            <button className="btn btn-outline-secondary" type="submit" onClick={() => this.props.editItem(this.props.idToEdit)}>
                { this.props.changeIcon ? <i className="fas fa-check"/> : <i className="fas fa-edit"/>}</button>
            //<div>
              //  { this.props.changeIcon ? <button className="btn btn-outline-secondary" type="submit" onClick={this.handleSubmit}>
                //    <i className="fas fa-check"/> </button> : <button className="btn btn-outline-secondary" type="submit" onClick={() => this.props.editItem(this.props.idToEdit)}>
                //    <i className="fas fa-edit"/> </button>
                //}
           // </div>

        )
    }
}
export default EditAnime;
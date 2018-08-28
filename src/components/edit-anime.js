import React, {Component} from 'react';
import axios from 'axios';

class EditAnime extends Component {

    render(){
        return (
            <button className="btn btn-outline-secondary" type="submit" onClick={() => this.props.editItem(this.props.idToEdit)}><i className="fas fa-edit"/></button>
        )
    }
}
export default EditAnime;
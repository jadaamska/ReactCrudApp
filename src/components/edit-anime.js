import React, {Component} from 'react';

class EditAnime extends Component {

    render(){
        return (
                <button className="btn btn-outline-secondary" type="submit"
                        onClick={() => this.props.editItem(this.props.idToEdit)}
                        onSubmit={this.props.submitChange}>
                    <i className={`fas fa-${this.props.changeIcon ? 'check' : 'edit'}`}/>
                    </button>
          //  <div>
           //     { this.props.changeIcon ? <button className="btn btn-outline-secondary" type="submit" onSubmit={this.handleSubmit} onClick={() => this.props.editItem(this.props.idToEdit)}>
            //        <i className="fas fa-check"/> </button> : <button className="btn btn-outline-secondary"  onClick={() => this.props.editItem(this.props.idToEdit)}>
            //        <i className="fas fa-edit"/> </button>
            //    }
           // </div>

        )
    }
}
export default EditAnime;
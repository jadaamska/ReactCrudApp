import React, {Component} from 'react';
import axios from 'axios';
import DeleteAnime from "./delete-anime";
import EditAnime from "./edit-anime";

class TrComponent extends Component {

    constructor() {
        super();
        this.state = {toEdit: false , idToEdit : -1, title: '', author: '', rating: ''}
}

    editElement = (id) => {
        this.setState({toEdit: !this.state.toEdit, idToEdit : id});
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {

        axios.put(`http://localhost:4000/series/${this.props.idToEdit}`, {
            title: this.state.title,
            author: this.state.author,
            rating: this.state.rating
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }


    render(){
        const starArray = [1,2,3,4,5];
        return(
            <tr key={this.props.index}>
                <th scope="row">
                    {this.props.index + 1}
                </th>
                <td>
                    {this.state.toEdit
                        && this.props.series.id === this.state.idToEdit
                        ? <input type="text"
                                 className="form-control"
                                 placeholder={this.props.series.title}
                                 name="title"
                                 aria-label="anime-title"
                                 aria-describedby="button-addon2"
                                 onChange={this.handleChange}/>
                        : this.props.series.title}
                </td>
                <td>
                    {this.state.toEdit
                        && this.props.series.id === this.state.idToEdit
                        ? <input type="text"
                                 className="form-control"
                                 placeholder={this.props.series.author}
                                 name="author"
                                 aria-label="anime-title"
                                 aria-describedby="button-addon2"
                                 onChange={this.handleChange}/>
                        : this.props.series.author}
                </td>
                <td>
                    {starArray.map(item =>
                        <i key={item}
                           className={item <= this.props.series.rating
                               ? "fas fa-star red"
                               : "fas fa-star"}/>)}
                </td>
                <td>
                    <DeleteAnime id={this.props.series.id} removeItem={this.props.removeElement}/>
                </td>
                <td>
                    <EditAnime idToEdit={this.props.series.id}
                               titleToEdit={this.props.series.title}
                               authorToEdit={this.props.series.author}
                               ratingToEdit={this.props.series.rating}
                               editItem={this.editElement}
                               submitChange = {this.handleSubmit}
                               changeIcon={this.state.toEdit && this.props.series.id === this.state.idToEdit} />
                </td>
            </tr>
        )
    }
}
export default TrComponent;
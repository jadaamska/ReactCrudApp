import React, {Component} from 'react';
import axios from 'axios';
import DeleteAnime from "./delete-anime";
import AddAnime from "./add-anime";
import EditAnime from "./edit-anime";
import Stars from "./stars";

class SeriesList extends Component {
    constructor(){
        super();
        this.state = { series: [] , toEdit: false , idToEdit : -1}
    }


    componentDidMount() {
        axios.get(`http://localhost:4000/series`)
            .then(res => {
                const series = res.data;
                console.log(res.data);
                this.setState({ series });
            })
            .catch(err => console.log(err));
    }

    addElement = (element) => {
        const arr = this.state.series;
        arr.push(element);
        this.setState({series: arr});
    }

    removeElement = (id) => {
        this.setState({series: this.state.series.filter(item => item.id !== id)});
        console.log(this.state.series);
    }

    editElement = (id) => {
        let x;
        if(this.state.toEdit === true){
            x = false;
        } else {
            x = true;
        }
        this.setState({toEdit: x, idToEdit : id});
    }


    showFieldToEdit() {
        return(
            <tr>
                <li>
                    <form className="input-field">
                        <input type="text" className="form-control" placeholder="anime-title"
                               name="title"
                               aria-label="anime-title" aria-describedby="button-addon2"  />
                        <input type="text" className="form-control" placeholder="anime-author"
                               name="author"
                               aria-label="anime-author" aria-describedby="button-addon2" />
                        <Stars />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                    </form>
                </li>
            </tr>
        )
    }


    render() {
        const starArray = [1,2,3,4,5];
        return (
            <div className="SeriesList">
                <AddAnime add={this.addElement}/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Anime Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Score</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.series.map((series, index) =>
                            <tr key={index}>
                            <th scope="row">
                                <li key={index}>{index + 1}</li>
                            </th>
                            <td>
                                <li key={index}>{this.state.toEdit && series.id === this.state.idToEdit ? <input type="text" className="form-control" placeholder={series.title}
                                                                           name="title"
                                                                           aria-label="anime-title" aria-describedby="button-addon2" />: series.title}</li>
                            </td>
                            <td>
                                <li key={index}>{this.state.toEdit && series.id === this.state.idToEdit ? <input type="text" className="form-control" placeholder={series.author}
                                                                                                                 name="title"
                                                                                                                 aria-label="anime-title" aria-describedby="button-addon2" />: series.author}</li>
                            </td>
                            <td>
                                <li key={index}>{starArray.map(item => <i key={item} className={item <= series.rating ? "fas fa-star red" : "fas fa-star"}/>)} </li>
                            </td>
                            <td>
                                <li key={index}> <DeleteAnime id={series.id} removeItem={this.removeElement}/></li>
                            </td>
                            <td>
                                <li key={index}> <EditAnime idToEdit={series.id} editItem={this.editElement}/></li>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SeriesList;
//parentCallback={() => this.setState({deleted: true})}
{/*{this.state.toEdit && this.showFieldToEdit()}*/}
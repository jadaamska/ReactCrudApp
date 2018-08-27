import React, {Component} from 'react';
import axios from 'axios';
import DeleteAnime from "./delete-anime";
import AddAnime from "./add-anime";

class SeriesList extends Component {
    constructor(){
        super();
        this.state = { series: [] }
    }


    componentDidMount() {
        axios.get(`http://localhost:4000/series`)
            .then(res => {
                const series = res.data
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
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.series.map((series, index) =>
                        <tr key={index}>
                            <th scope="row">
                                <li key={index}>{index + 1}</li>
                            </th>
                            <td>
                                <li key={index}>{series.title}</li>
                            </td>
                            <td>
                                <li key={index}>{series.author}</li>
                            </td>
                            <td>
                                <li key={index}> {starArray.map(item => <i key={item} className={item <= series.rating ? "fas fa-star red" : "fas fa-star"}/>)} </li>
                            </td>
                            <td>
                                <li key={index}> <DeleteAnime id={series.id} removeItem={this.removeElement}/></li>
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
//removeItem={this.removeElement}
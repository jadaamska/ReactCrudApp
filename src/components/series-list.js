import React, {Component} from 'react';
import axios from 'axios';
import AddAnime from "./add-anime";
import TrComponent from "./tr-component";

class SeriesList extends Component {
    constructor(){
        super();
        this.state = { series: [] }
    }

    fetchList = () => {
        axios.get(`http://localhost:4000/series`)
            .then(res => {
                const series = res.data;
                console.log(res.data);
                this.setState({ series });
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.fetchList()
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
        return (
            <div className="SeriesList">
                <AddAnime add={this.addElement} />
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
                            <TrComponent index={index} series={series} removeElement={this.removeElement} onUpdate={this.fetchList}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SeriesList;
//parentCallback={() => this.setState({deleted: true})}
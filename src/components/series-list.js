import React, {Component} from "react";
import axios from 'axios';

class SeriesList extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/series`)
            .then(res => {
                const series = res.data;
                this.setState({ series });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="SeriesList">
                <ul>
                    { this.state.series.map(series => <li>{series.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default SeriesList;
import React, {Component} from 'react';
import axios from 'axios';
import DeleteAnime from "./delete-anime";

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
        const starArray = [1,2,3,4,5];
        return (
            <div className="SeriesList">
                {/*<table>*/}
                    {/*<td>*/}
                        {/*{ this.state.series.map((series, index) => <li key={index}>{series.id}</li>)}*/}
                    {/*</td>*/}
                    {/*<td>*/}
                        {/*{ this.state.series.map((series, index) => <li key={index}>{series.title}</li>)}*/}
                    {/*</td>*/}
                    {/*<td>*/}
                        {/*{ this.state.series.map((series, index) => <li key={index}>{series.author}</li>)}*/}
                    {/*</td>*/}
                    {/*<td>*/}
                        {/*{ this.state.series.map((series, index) => <li key={index}> {starArray.map(item => <i key={item} className={item <= series.rating ? "fas fa-star red" : "fas fa-star"}/>)} </li>)}*/}
                    {/*</td>*/}
                    {/*<td>*/}
                        {/*{ this.state.series.map((series, index) => <li key={index}> <DeleteAnime id={series.id} /></li>)}*/}
                    {/*</td>*/}
                {/*</table>*/}
                <table>
                    {this.state.series.map((series, index) =>
                        <tr>
                            <td>
                                <li key={index}>{series.id}</li>
                            </td>
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
                                <li key={index}> <DeleteAnime id={series.id} /></li>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}

export default SeriesList;
//parentCallback={() => this.setState({deleted: true})}
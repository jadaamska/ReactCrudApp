import React, {Component} from "react";
import SeriesList from './series-list';

class MainView extends Component {

    render() {
        return (
            <div className="mainView ">
                <header>
                    <div className="header-logo">
                        AnimeList
                    </div>
                </header>
                <div className="content">
                    <SeriesList/>
                </div>
            </div>
        );
    }
}
export default MainView;

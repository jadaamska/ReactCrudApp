import React, {Component} from "react";
import SeriesList from './series-list';
import AddAnime from "./add-anime";

class MainView extends Component {

    render() {
        return (
            <div className="mainView ">
                <header>
                    <div className="header-logo">
                        header
                    </div>
                </header>
                <AddAnime/>
                <div className="content">
                    <SeriesList/>
                </div>
            </div>
        );
    }
}
export default MainView;

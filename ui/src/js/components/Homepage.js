import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search'

import style from '../../css/style.css';


class HomePage extends PureComponent {

    render() {

        return (
        <div className='container'>
            <Paper className='search-paper'>
                <div className='searchIcon'>
                    <SearchIcon />
                </div>
                <div className='search'>
                <InputBase
                    placeholder="Search…"
                    //value={ this.props.currentTransaction }
                    //onChange={(e) => this.props.updateCurrentTransaction("currentTransaction", e.target.value) }
                    className='inputInput'
                    />
                </div>
            </Paper>

            <Paper className="map-paper" elevation={1}>
            </Paper>

            <Paper className="cql-paper" elevation={1}>
            </Paper>
        </div>
        );
    }
}
export default HomePage;
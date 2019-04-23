import React, {PureComponent} from 'react';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import style from '../../css/style.css';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class HomePage extends PureComponent {

    render() {
        const { classes } = this.props;

        return (
        <div className='container'>
        <Grid>
            <Paper className='search-paper'>
                <div style={{marginTop: "6px"}} className='searchIcon'>
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
                <div>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        GO
                    </Button>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id=""
                        multiple
                        type="file"
                    />
                </div>
            </Paper>

            <Paper className="map-paper" elevation={1}>
            </Paper>

            <Paper className="cql-paper" elevation={1}>
            </Paper>
        </Grid>
        </div>
        );
    }
}


export default withStyles(styles)(HomePage);
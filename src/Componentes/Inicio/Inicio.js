import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function Inicio() {

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(8),
        }
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper elevation={4} className={classes.root}>
                
            </Paper>
        </React.Fragment>
    );
}
export default Inicio;
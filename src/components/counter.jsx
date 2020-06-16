import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { Button, makeStyles } from '@material-ui/core';
import {
    incrementAction
} from '../actionners/increment'
import {
    decrementAction
} from '../actionners/decrementAct'

const Wrapper = styled.section`
background: black;
color: white;
border-radius: 1em;
padding: 2em;
position: absolute;
text-align:center;
font-size:20px;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Counter = ({
    counter,
    incrementAction,
    decrementAction }) => {
    const classes = useStyles();
    /*hooks*/

    const [counterVal, setCounter] = useState(counter);
    useEffect(() => {
        setCounter(counter)
    }, [counter])

    return (
        <Wrapper>
            <h1>COUNTER APP</h1>
            <span>{counterVal}</span>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-beween"
            }}>
                <div className={classes.root}>
                    <Button variant="contained" onClick={() => incrementAction()}> Increment</Button>
                </div>
                <div className={classes.root}>
                    <Button variant="contained" onClick={() => decrementAction()}>Decrement</Button>
                </div>
            </div>
        </Wrapper>
    );
};

Counter.defaultProps = {
    ctr: 0
}

Counter.propTypes = {
    ctr: PropTypes.number.isRequired
};

const mapStateToProps = ({ ctr }) => {
    return ({
        counter: ctr.counter
    })
}

export default connect(mapStateToProps, { incrementAction, decrementAction })(Counter);
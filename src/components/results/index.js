import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';

class Results extends Component {
    state = {
        data: []
    }

    async componentDidMount(){
        await this.fetchResults()
    }

    fetchResults = async () => {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        let data = await res.json()

        this.setState({
            data
        })
    }

    render() {
        console.log(this.state.data);
        const {results} = this.props;
        return(
            <Page 
            results = {results}
            goTo = {(path) => {
                this.props.history.push(path);
            }}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        results:state.results,
    };
};

export default withRouter(
    connect(mapStateToProps)(Results)
);
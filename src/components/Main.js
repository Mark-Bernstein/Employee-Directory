import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class Main extends Component {
    state = {
        results: [],
        search: ""
    };

    // When this component mounts, render the random default employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search(10)
        .then(res => {
            this.setState({results: res.data.results});
            console.log(this.state.results)
        }).catch(err => console.log(err))

    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <Nav />
                    <SearchBox
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                <DataTable results={this.state.results} />
            </Wrapper>
        );
    }
}

export default Main;
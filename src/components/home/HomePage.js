import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Corse Management Sytem</h1>
                <p>React, Redux and React Routers in ES6.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More!</Link>
            </div>
        );
    }
}

export default HomePage;

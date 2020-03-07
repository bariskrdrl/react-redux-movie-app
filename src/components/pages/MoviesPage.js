import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../pages/MoviesList';

export class MoviesPage extends PureComponent {
    static propTypes = {
        movies: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                Movies Page
                <MoviesList movies={this.props.MoviesList}></MoviesList>
            </div>
        )
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
}

export default connect(mapStateToProps) (MoviesPage);
import React, { Component } from 'react';

//Functional Component
// const SearchBar = () => {
//     return <input />
// };

// Hereda funcionalidades de React.Component
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }; //only in the constructor we change the state like this
    }

    render() { 
        return ( 
        <div className="search-bar">    
        <input 
            value={ this.state.term} //converts this to a controlled component
            onChange={event => this.onInputChange(event.target.value)} 
            placeholder="Search your favorite YouTube videos..." />
        </div>
        );
        //setState is saying: hey the state is changing and here's what the new state is.
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar; //Esto es lo que encuentra el index.js y de aca se va al metodo/clase con ese nombre
import React, {Component} from 'react';
import './Countries.css';

class Countries extends Component {

    state = {
      countries: [],
    };

    async componentDidMount() {
        const response = await fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');

        if (response.ok) {
            const countries = await response.json();
            this.setState({countries});
        }
    }

    render() {
        return (
            <div className="Countries">
                {this.state.countries.map((country, index) => (
                    <p className="country-name">{country.name}</p>
                ))}
            </div>
        );
    }
}

export default Countries;
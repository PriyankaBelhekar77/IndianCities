import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Notification from './components/layout/Notification';
import City from './components/cityData/City';
import Search from './components/cityData/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AddCity from './components/cityData/AddCity';
import All from './components/pages/All';
import Shortlisted from './components/pages/Shortlisted';
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      cityData: [],
      filterData: [],
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://gist.githubusercontent.com/pratikg117/7ce66c7ade26a94772111334e40b287b/raw/fd5d7109921ca7a461a19ae73bfb71c9696bd139/Assignment%2520Json')
    res.data.forEach((data, id) => {
      data.id = id;
      data.shortlist = false;
    })
    this.setState({ loading: false, cityData: res.data });

  }

  searchData = (text) => {
    const createFilter = this.state.cityData.filter((data) => {
      return data.City.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
        data.State.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
        data.District.toLowerCase().indexOf(text.toLowerCase()) !== -1
    });
    this.setState({ filterData: createFilter });
  }

  deleteCity = (id) => {
    const filterData = this.state.cityData.filter((value, index) => id !== index);
    this.setState({ cityData: filterData });
  }

  shortlistCity = (id) => {
    this.setState(prevState => {
      let newState = { ...prevState.cityData };
      newState[id].shortlist = true;
      return { newState };
    });
  }

  removeShortlistCity = (id) => {
    this.setState(prevState => {
      const newState = [...prevState.cityData];
      newState.forEach((data) => {
        if (data.id === id) {
          data.shortlist = false;
        }
      });
      return { newState };
    });
  }

  addCityData = (data) => {
    console.log('data', data)
    this.setState({ cityData: [...this.state.cityData, data] })
  }

  render() {
    const { loading, cityData, filterData } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchData={this.searchData} cityData={cityData} />
                  <AddCity cityData={cityData} addCityData={this.addCityData} />
                  {
                    filterData.length ? <City loading={loading} cityData={filterData}
                      deleteCity={this.deleteCity}
                      shortlistCity={this.shortlistCity}
                      removeShortlistCity={this.removeShortlistCity}
                    /> :
                      <All
                        loading={loading}
                        cityData={cityData}
                        deleteCity={this.deleteCity}
                        shortlistCity={this.shortlistCity}
                        removeShortlistCity={this.removeShortlistCity}
                      />
                  }
                </Fragment>
              )}
              />
              <Route exact path='/shortlisted' render={props => (
                <Fragment>
                  <Shortlisted
                    loading={loading}
                    cityData={cityData}
                    deleteCity={this.deleteCity}
                    removeShortlistCity={this.removeShortlistCity}
                  />
                </Fragment>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

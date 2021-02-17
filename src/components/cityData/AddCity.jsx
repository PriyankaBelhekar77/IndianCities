import React, { Component } from 'react';

class AddCity extends Component {
  state = { text: '', addCity: false };

  getDataArray = (name) => {
    const dataArr = [];
    this.props.cityData.forEach((data) => dataArr.push(data[name]));
    const uniqueArr = [...new Set(dataArr)];
    return uniqueArr;
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addCityData({
      State: e.target[0].value,
      District: e.target[1].value,
      City: e.target[2].value,
      shortlist: false,
      id: Math.floor((1 + Math.random()) * 0x10000)
    });
    this.setState({ text: '', addCity: false });
  }

  render() {
    return (
      <div className='add-city'>
        <button className='btn btn-dark btn-block' onClick={() => this.setState({ addCity: true })}>Add City</button>
        {this.state.addCity &&
          <div>
            <form className='form' onSubmit={this.onSubmit}>
              <div className='form-cntr'>
                <div className='add-city-data'>
                  <label htmlFor='city'>City Name</label>
                  <input
                    text='text'
                    name='text'
                    placeholder='City name'
                    value={this.state.text}
                    autoComplete='off'
                    onChange={this.onChange}
                    style={{margine: 0}}
                  />
                  <label htmlFor='state'>State Name</label>
                  <select id='State' name='State'>Î
                  {this.getDataArray('State').map((data, index) => (
                    <option key={index} value={data}>{data}</option>
                  ))}
                  </select>
                  <label htmlFor='district'>District Name</label>
                  <select id='district' name='District'>
                    {this.getDataArray('District').map((data, index) => (
                      <option key={index} value={data}>{data}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-dark'
                  />
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default AddCity; 

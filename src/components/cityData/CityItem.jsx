import React from 'react';
import { Table } from 'semantic-ui-react';

const { Header, HeaderCell, Body, Row, Cell } = Table;

const CityItem = ({ cityData, deleteCity, shortlistCity, removeShortlistCity }) => {
  return (
    <div className='CityItem'>
      <Table striped>
        <Header>
          <Row>
            <HeaderCell>State</HeaderCell>
            <HeaderCell>District</HeaderCell>
            <HeaderCell>City</HeaderCell>
            <HeaderCell>Action</HeaderCell>
          </Row>
        </Header>
        <Body>
          {cityData.map((city, id) => (
            <Row key={id}>
              <Cell>{city.State}</Cell>
              <Cell>{city.District}</Cell>
              <Cell>{city.City}</Cell>
              <Cell>
                <div className='city-item'>
                  <button className='btn btn-dark' disabled={city.shortlist}
                    onClick={(e) => {
                      shortlistCity(city.id);
                    }}>Shortlist</button>
                  {city.shortlist && <button className='btn btn-dark' onClick={(e) => {
                    removeShortlistCity(city.id);
                  }}>Remove</button>}
                  <button className='btn btn-dark' onClick={() => {
                    deleteCity(city.id);
                  }}>Delete</button>
                </div>
              </Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </div>
  );
}

export default CityItem;
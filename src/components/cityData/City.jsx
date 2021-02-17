import Spinner from '../layout/Spinner';
import CityItem from './CityItem';

const City = ({ loading, cityData, deleteCity, shortlistCity, removeShortlistCity }) => {
  return (
    loading ? <Spinner /> :
      <div className='City'>
        <CityItem
          cityData={cityData}
          deleteCity={deleteCity}
          shortlistCity={shortlistCity}
          removeShortlistCity={removeShortlistCity}
        />
      </div>
  );
}

export default City;

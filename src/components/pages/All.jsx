import City from '../cityData/City'

const All = ({loading, cityData, deleteCity, shortlistCity, removeShortlistCity}) => {
  return (
    <div>
      <City
        loading={loading}
        cityData={cityData}
        deleteCity={deleteCity}
        shortlistCity={shortlistCity}
        removeShortlistCity={removeShortlistCity}
      />
    </div>
  );
}

export default All;
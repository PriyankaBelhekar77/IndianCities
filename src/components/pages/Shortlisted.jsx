import City from '../cityData/City'

const Shortlisted = ({loading, cityData, deleteCity, removeShortlistCity}) => {
  return (
    <div>
      <City
        loading={loading}
        cityData={cityData.filter((data) => data.shortlist)}
        deleteCity={deleteCity}
        removeShortlistCity={removeShortlistCity}
      />
    </div>
  );
}

export default Shortlisted;
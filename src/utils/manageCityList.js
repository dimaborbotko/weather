// add, delete, clear all, reload functions

export function manageCityList(cities, setCities) {
  const updateCity = (value, action) => {
    if (cities) {
      switch (action) {
        case "add":
          if (!cities.includes(value)) {
            setCities((arr) => [...arr, value])
          }
          break;
        case "delete":
          const updated = cities.filter((el) => el !== value);
          setCities(updated)
          break;
        case "clear":
          setCities([])
          break;
        default:
          break;
      }
    }
  };

  return {
    addCity: (value) => updateCity(value, "add"),
    deleteCity: (value) => updateCity(value, "delete"),
    clearCities: (value) => updateCity(value, "clear"),
  };
}

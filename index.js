const data = require("./sg-mrt.json");
const allStations = data.mrt;


// find mrt and line based on station
const findStation = station => {
  let result = {
    found: false
  };

  allStations.filter(mrt => {
    mrt.line.map(line => {
      line.station.map(station => {
        stationName = station.name;
      })
      if (station.includes(stationName)) {
        result.found = true;
        result.mrt = mrt.name;
        result.line_name = line.name;
        result.line_color = line.color;
        result.line_code = line.code;

        line.station.map(station => {
          result.station_name = station.name;
          result.station_code = station.stationCode;
          result.latitude = station.latitude;
          result.longitude = station.longitude;
        
         });
      }
      return null;
    });
    return null;
  });

  return result;
};

module.exports = findStation;

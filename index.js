const data = require("./sg-mrt.json");
const allStations = data.mrt;


// find mrt and line based on station
const findStation = station => {
  let result = {
    found: false
  };

  allStations.filter(mrt => {
    mrt.line.map(line => {
      line.station.map( station => {
        stationName = station.name;
      })
      if (station.includes(stationName)) {
        result.found = true;
        result.mrt = mrt.name;
        result.name = line.name;
        result.color = line.color;
        result.code = line.code;

        line.station.map(station => {
          result.station = station.name;
          result.station_code = station.stationCode;
        
         });
      }
      return null;
    });
    return null;
  });

  return result;
};

module.exports = findStation;

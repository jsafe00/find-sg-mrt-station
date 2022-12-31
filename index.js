const data = require("./sg-mrt.json");
const allStations = data.mrt;


// find mrt and line based on station
const findStation = station => {
  let result = {
    found: false
  };

  allStations.filter(mrt => {
    mrt.line.map(line => {
      if (line.station.includes(station)) {
        result.found = true;
        result.mrt = mrt.name;
        result.name = line.name;
        result.color = line.color;
        result.code = line.code;
      }
      return null;
    });
    return null;
  });

  return result;
};

module.exports = findStation;

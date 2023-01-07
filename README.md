# Find SG MRT Station

Simple npm package that returns the line name, color and code and station data based on station.

https://www.npmjs.com/package/find-sg-mrt-station

Install the package from NPM.

### Installation

```
npm i find-sg-mrt-station
```

Include it in your script

```
import {findStation} from "find-sg-mrt-station";
```

### Usage

```
const station = findStation("Dhoby Ghaut");
```

or

```
const findStation = require("find-sg-mrt-station");
let station =  "Dhoby Ghaut";
let find = findStation(station);
console.log(find);
```

### Sample Result

```
{
  found: true,
  mrt: 'Singapore MRT',
  line_name: 'Circle Line, North-East Line, North-South Line',
  line_color: 'Orange, Purple, Red',
  line_code: 'CC/CE, NE, NS',
  station_name: 'Dhoby Ghaut',
  station_code: 'CC1, NE6, NS24',
  latitude: '1.29870130663',
  longitude: '103.846115155'
}
```
### Github

```
https://github.com/jsafe00/find-sg-mrt-station
```

### If you spot errors or needs to be updated, please create PR. Thanks.

# Find SG MRT Station

Simple npm package that returns the line name, color and code data based on station.

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
  name: 'Circle Line | North-East Line | North-South Line',
  color: 'Orange | Purple | Red',
  code: 'CC/CE | NE | NS',
  station: 'Dhoby Ghaut',
  station_code: 'CC1 | NE6 | NS24'
}

```


### If you spot some errors or needs to be updated, please request PR. Thanks.
### Not yet final...

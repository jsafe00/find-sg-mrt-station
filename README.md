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
const station = findStation("Toa Payoh");
```

or

```
const findStation = require("find-sg-mrt-station");
let station =  "Toa Payoh";
let find = findStation(station);
console.log(find);
```

### Sample Result

```
{
  found: true,
  mrt: 'Singapore MRT',
  name: 'North-South Line',
  color: 'Red',
  code: 'NS',
  description: 'The North south line extends thru 27 stations from Jurong East,
a transfer station connected to the green line.'
}

```

<img src="https://lh3.googleusercontent.com/u1D5mrsgec9LfKN2tV5ZCRSUCcxJ50v_Ud-wxgL6QziL8kZYnUM86q7ARTeb9BzduL19ZQDw5W9FgGD8uGUvqcBUe1lCxWTDjs6TUYozdiBYuogfBl73IgpODG7itA-4gq_KsXsi2ko=w2400">





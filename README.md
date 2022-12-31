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
const station = findStation("Bishan");
```

or

```
const findStation = require("find-sg-mrt-station");
let station =  "Bishan";
let find = findStation(station);
console.log(find);
```

### Sample Result

```
{
  found: true,
  mrt: 'Singapore MRT',
  name: 'Circle Line | North-South Line',
  color: 'Orange | Red',
  code: 'CC/CE | NS'
}

```

<img src="https://lh3.googleusercontent.com/qVy6krF6jBNXUM-OXvogLB0EZJYpwgydBnAOsFmUdV-CId_qKQV7HXs5mvAA5oOaaIyP8NXbWN1CrQIV1UAlG3mqYTpJjRyycrdjJ46UVHCpRmtTzahccOzlSJbFxXbhywK6PGoL5jg=w2400">


### In Progress
More than one line/change station
 




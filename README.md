# chgis-1911-topojson
An example of data processing and visualization of CHGIS Version 5 Dataverse

## Motivation
A project requires to draw an ancient China map using d3. Therefore I have to figure out a way of a) getting geographic data (topojson format) of ancient China, and b) drawing the data using d3.

## How to run
1. In the 'visualization' folder, run a http server, such as [node-http-server][1]
2. Open 'localhost:8080' in Chrome. 8080 is the default port opened by node-http-server.

## Work flow:

* Download shape files of CHGIS V5: https://dataverse.harvard.edu/dataverse/chgis

> I use KMZ files because I am more familar with Google Earth than other GIS systems. Therefore the instructions below are based on KMZ files. 

* Edit KMZ files using Google Earth.

> To reduce the file size and keep the general shape of the map, I delete a number of small islands in the map. At last, save to KML file.

* Convert KML files to topojson using: https://github.com/Georeactor/to-topojson 

> Example code can be found in 'dataprocessing/converter.js'. More information of topojson can be found: https://github.com/mbostock/topojson   

* Draw it using d3.js.

> Based on the template: https://github.com/clemsos/d3-china-map One tricky part is to remove the outer rectangle of each province. I don't know why the topojson file contains that rectangle. If there's a better way of obtaining topojson files, please let me know. Thank you!

* Explore the ancient map

> Run a http server in the 'visualization' folder, and open 'localhost:8080' in Chrome.

[1]: https://github.com/indexzero/http-server
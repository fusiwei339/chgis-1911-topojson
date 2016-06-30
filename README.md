# chgis-1911-topojson
An example of data processing and visualization of CHGIS Version 5 Dataverse

## Motivation
A project needs to draw an ancient China map using d3. Therefore I have to figure out a way of a) finding geographic data (topojson format) of ancient China, and b) drawing the data using d3.

## Data processing
###Work flow: 
1. Download shape files of CHGIS V5: https://dataverse.harvard.edu/dataverse/chgis
  I use KMZ files because I am more familar with Google Earch than other GIS systems. Therefore the instructions below are based on KMZ files. 
2. Edit KMZ files using Google Earch.
  To reduce the file size and keep the general shape of the map, I delete a number of small islands in the map. Further, I delete one region of Shanxi inside Neimenggu.
3. Convert KMZ files to topojson using: https://github.com/Georeactor/to-topojson 
  More information of topojson can be found: https://github.com/mbostock/topojson   
4. Draw it using d3.js
  Based on the template: https://github.com/clemsos/d3-china-map


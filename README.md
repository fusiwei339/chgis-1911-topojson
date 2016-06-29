# chgis-1911-topojson
Data processing and visualization of CHGIS Version 5 Dataverse

## Motivation
A project needs to draw ancient China map using d3. Therefore I have to figure a way of a) finding geographic data of ancient China, and b) drawing the data using d3.

## Data processing
###Work flow: 
1. Download shape files of CHGIS V5: https://dataverse.harvard.edu/dataverse/chgis
  1. I use KMZ files because I am more familar with Google Earch, which is a toy for me, than other GIS systems. Therefore the instructions below are based on KMZ files. If you are a GIS guy, please skip this guide and I believe you have a better way of visualizati
  2. 
2. Edit KMZ files using Google Earch
3. Convert KMZ files to topojson using: https://github.com/Georeactor/to-topojson Thanks to their great work!
4. Draw it using d3.js

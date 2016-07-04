// DATA 
// parse data properly
var umap = []
data.map(function(d) {umap[d[0]]=Number(d[1])});

var v = Object.keys(umap).map(function(k){return umap[k]})
// console.log(v);

// LOAD DATA
queue()
    .defer(d3.json, "maps/ancient.json") // mainland
    .await(drawChina); // function that uses files

// DRAW 
// create SVG map
var projection = d3.geo.mercator()
    .center([116,39])
    .scale(600);

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + width + " " + height);

var path = d3.geo.path()
    .projection(projection);

// COLORS
// define color scale
var colorScale = d3.scale.linear()
           .domain(d3.extent(v))
           .interpolate(d3.interpolateHcl)
           .range(["white", "lightgrey"]);

// add grey color if no values
var color = function(i){ 
    if (i==undefined) {return "#cccccc"}
    else return colorScale(i)
}

// Mainland provinces
function drawChina(error, cn) {
    
    svg.append("g")
        .attr("class", "map")
        .append("g")
        .attr("class", "mainland")
        .selectAll("path")
        .data(topojson.feature(cn, cn.objects.geo).features)
        .enter()
        .append("path")
        .attr("d", function(d, i){
            var str=path(d);
            var polys=str.split('M')
            return 'M'+polys[1];
        })
        .attr("id", function(d) { return d.id; })
        .attr("class", "province")
        .attr("fill", function(d){
            return color(umap[d.properties.NAME_PY])
        })
        .attr("stroke", "black")
        .attr("stroke-width", "0.35");
}


// Read-in and store JSON data for Belly Button Study
var bbData = d3.json("../../samples.json");

// Console Log the IDs

// Populate DropDown Menu with IDs
// Append option tags to the selection tag

bbData.then(function(data) {
    
    var selection = d3.select("#selDataset")
    .selectAll("option")
    
    selection.data(data.names)
        .enter()
        .append("option")
        .text(d => d)
})



// Grab Horizontal Bar Chart Data



// Build a Horizontal Bar Chart
    var bbHBar = [{
        type: 'bar',
        x: sample_values,
        y: otu_ids,
        text: otu_labels,
        orientation: 'h'
    }];

    var layout = {
        width: "200px",
        height: "200px"
    };


  
  Plotly.newPlot('bar', bbHBar, layout);
});
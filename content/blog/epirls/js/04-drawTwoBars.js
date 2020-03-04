function drawTwoBars(data, response) {
    var data_boy = data.filter(d => d["EqVar1Value"] === "BOY")
                                .sort( (a, b) => d3.descending(a["PCT"], b["PCT"])); //sorting here doesn't decide the actual order but it helps for me to see the order of this data in the console if needed
    var data_girl = data.filter(d => d["EqVar1Value"] === "GIRL")
                                .sort( (a, b) => d3.ascending(a["PCT"], b["PCT"]));
    // console.log(data_boy);
    // console.log(data_girl);

    //data = data.sort( (a, b) => d3.descending(a["PCT"], b["PCT"]));
    //console.log(data);
    /**********************
    ***** BASIC SETUP *****
    **********************/

    // dynamic dimension sizing code adapted from
    // https://github.com/d3/d3-selection/issues/128
    const bbox = d3.select("#chart").node().getBoundingClientRect()

    const width = bbox.width;
    const height = bbox.height;
    const margin = {top: 50, left: 130, right: 50, bottom: 50};

    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.bottom - margin.top;

    //const smallMultipleWidth = plotWidth/5

    const svg = d3.select("#chart").select("svg");

    const DURATION = 1000;


    /***********************
    ***** X & Y SCALES *****
    ***********************/

    let xMin = 0;
    let xMax = 50;
    let yGroup = "IDCNTRY";

    let smallMultiplePadding = 30

    let xScale = d3.scaleLinear()
            .domain([xMin, xMax])
            .range([smallMultiplePadding, plotWidth]);
   
    //using the same yScale order as in 03-drawLongBarChart.js
    let yScale = d3.scaleBand()
        .domain(["Chinese Taipei", "Abu Dhabi, UAE", "United Arab Emirates", "Georgia", "Israel", "Dubai, UAE", "Singapore", "United States", "Norway (5th Grade)", "Italy", "Portugal", "Denmark", "Ireland", "Canada", "Slovenia", "Sweden"])
        .range([0, plotHeight])
        .padding(.5);
    
    /***************************************
    ***** X AXIS, AXIS LABEL, GRIDLINE *****
    ***************************************/

    // svg.selectAll(".xAxis1,.xAxis2,.xAxis3,.xAxis4")
    //     .remove()

    svg.selectAll(".xAxis0")
            .transition()
            .duration(DURATION)
            .attr("transform", `translate(${margin.left}, ${plotHeight + margin.top})`)
            .call(d3.axisBottom(xScale)
                .ticks(4)
                //.tickFormat(d3.format("d"))
            );

    // svg.selectAll(".xGrid1,.xGrid2,.xGrid3,.xGrid4")
    //     .remove()

    svg.selectAll(".xGrid0")
        .transition()
        .duration(DURATION)
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .call(d3.axisBottom(xScale)
            .tickSize(plotHeight)
            .ticks(3)
            .tickFormat("")
        );

    svg.selectAll(".xLabel")
        .data([{"label": "Percent of students who clicked on ads"}])
        .text(d => d.label);


    // svg.selectAll(".xTitle")
    //     .transition()
    //     .duration(DURATION * 0.5)
    //         .style("opacity", 0)
    //         .remove()



    /***************************************
    ***** Y AXIS, AXIS LABEL, GRIDLINE *****
    ***************************************/

    svg.select(".yAxis")
        .transition()
        .duration(DURATION)
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(yScale)
                .tickSize(5)
                .tickPadding(5))
            .style("text-anchor", "end")
            .style("alignment-baseline", "middle")
            //.style("font-weight", "bold")
            .style("font-family", "sans-serif")
            .style("font-size", 12);

    // svg.select(".yGrid")
    //     .attr("transform", `translate(${margin.left}, ${margin.top})`) //+ 1 * yScale.bandwidth()
    //     .call(d3.axisLeft(yScale)
    //         .tickSize(-(plotWidth))
    //         .tickFormat("")
    //     );

    /******************
    ***** TOOLTIP *****
    *******************/
    var div = d3.select(".tooltipBarChart")
    .style("opacity", 0)

    /***************************************
    ***** LINES , CIRCLES, RECTS *****
    ***************************************/

    // Append g to hold lines
    var plot = svg.select("#plot")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    plot.selectAll(".rectLong, .rectLongNoClick, .rectLongYesClick, .rectLongGap, .lineAverageNoClick, .lineAverageYesClick, .annotations")
        .transition()
        .duration(DURATION * 0.5)
            .attr("width", 0)
            .style("opacity", 0)
            .remove();

    plot.selectAll(".rectLongBoy")
        .data(data_boy)
        .enter() 
        .append("rect")
        .attr("class", "rectLongBoy")
        .attr("x", d => xScale(0))
        .attr("y", d => yScale(d[yGroup]) - yScale.bandwidth()*0.4)
        .attr("height", yScale.bandwidth()*0.8)
        //.style("fill", "blue")
        .attr("width", 0)
        .transition()
        .delay(DURATION * 0.5)//wait for the removal to happen first
        .duration(DURATION)
            .attr("width", function(d){
                return xScale(d["PCT"]) - xScale(0)
            });

    plot.selectAll(".rectLongBoy")
    .on("mouseenter", function(d) {
        d3.select(this)
            .style("fill", "#C4CFD0")
        
        div.style("opacity", 1)
            .html(d3.format(".1f")(d["PCT"]) + "%")
            .style("left", (xScale(d["PCT"]) + 142) + "px")
            .style("top", (yScale(d[yGroup]) - yScale.bandwidth()*0.4 + 38) + "px")
        })              
    .on("mouseleave", function(d) { 
        d3.select(this)
            .style("fill", "#1C366B")
        div.style("opacity", 0)
        })  

    plot.selectAll(".rectLongGirl")
        .data(data_girl)
        .enter() 
        .append("rect")
        .attr("class", "rectLongGirl")
        .attr("x", d => xScale(0))
        .attr("y", d => yScale(d[yGroup]) + yScale.bandwidth()*0.4)
        .attr("height", yScale.bandwidth()*0.8)
        //.style("fill", "pink")
        .attr("width", 0)
        .transition()
        .delay(DURATION * 0.5)//wait for the removal to happen first
        .duration(DURATION)
            .attr("width", function(d){
                return xScale(d["PCT"]) - xScale(0)
            });

    plot.selectAll(".rectLongGirl")
    .on("mouseenter", function(d) {
        d3.select(this)
            .style("fill", "#C4CFD0")
        
        div.style("opacity", 1)
            //.text([d["Min"]])
            .html(d3.format(".1f")(d["PCT"]) + "%")
            .style("left", (xScale(d["PCT"]) + 142) + "px")
            .style("top", (yScale(d[yGroup]) + yScale.bandwidth()*0.4 + 38) + "px")
        })              
    .on("mouseleave", function(d) { 
        d3.select(this)
            .style("fill", "#F24D29")
        div.style("opacity", 0)
        })  

    
    /*************************
    ***** TITLE, CAPTION *****
    *************************/

    // Create header grouping
    const header = svg.select("#header");

    // chart title
    header.selectAll(".chartTitle")
        .data([{"label": "Pecent of students who clicked on ads by gender and education system"}])
        .text(function(d) {return d.label;})


    // Create footer grouping
    const footer = svg.select("#footer");

    // Caption with data source
    footer.selectAll(".captionText")
        .data([{"label": "Data source: ePIRLS 2016 data"}])
        .text(function(d) {return d.label;})


    /*********************
    ***** HIDE BOX V3*****
    **********************/

    d3.selectAll(".highlightBoxV3")
        .transition()
        .duration(0.5 * DURATION)
        .style("stroke-opacity", 0)    


    


}

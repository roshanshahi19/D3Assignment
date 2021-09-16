Promise.all([d3.csv("/data1.csv"),d3.csv("/data2.csv")]).then(function(data){
    var data1=[];
    var data2=[];
    data1=data[0];
    data2=data[1];

  var new_data=[];
  var i=0;
  for(i=0;i<data2.length;i++){
     
    if (i<110)
    {
        
    if(data1[i]["Country Code"] == data2[i]["Country Code"]){
        new_data.push({
            countryName : data1[i]["Country Name"],
            CountryCode : data1[i]["Country Code"],
             Pop1960     : +(data1[i]["1960"]+data1[i]["1961"]+data1[i]["1962"]+data1[i]["1963"]+data1[i]["1964"]),
                Pop1965     : +(data1[i]["1965"]+data1[i]["1966"]+data1[i]["1967"]+data1[i]["1968"]+data1[i]["1969"]),
                Pop1970     : +(data1[i]["1970"]+data1[i]["1971"]+data1[i]["1972"]+data1[i]["1973"]+data1[i]["1974"]),
                Pop1975     : +(data1[i]["1975"]+data1[i]["1976"]+data1[i]["1977"]+data1[i]["1978"]+data1[i]["1979"]),
                Pop1980     : +(data1[i]["1980"]+data1[i]["1981"]+data1[i]["1982"]+data1[i]["1983"]+data1[i]["1984"]),
                Pop1985     : +(data1[i]["1985"]+data1[i]["1986"]+data1[i]["1987"]+data1[i]["1988"]+data1[i]["1989"]),
                Pop1990     : +(data1[i]["1990"]+data1[i]["1991"]+data1[i]["1992"]+data1[i]["1993"]+data1[i]["1994"]),
                Pop1995     : +(data1[i]["1995"]+data1[i]["1996"]+data1[i]["1997"]+data1[i]["1998"]+data1[i]["1999"]),
                Pop2000     : +(data1[i]["2000"]+data1[i]["2001"]+data1[i]["2002"]+data1[i]["2003"]+data1[i]["2004"]),
                Pop2005     : +(data1[i]["2005"]+data1[i]["2006"]+data1[i]["2007"]+data1[i]["2008"]+data1[i]["2009"]),
                Pop2010     : +(data1[i]["2010"]+data1[i]["2011"]+data1[i]["2012"]+data1[i]["2013"]+data1[i]["2014"]),
                Pop2015     : +(data1[i]["2015"]+data1[i]["2016"]+data1[i]["2017"]+data1[i]["2018"]+data1[i]["2019"]+data1[i]["2020"]),
            IncomeGroup : data2[i]["IncomeGroup"]                        
        })
        
    }}
    else{
        if(data1[i+1]["Country Code"] = data2[i]["Country Code"]){
            new_data.push({
                countryName : data1[i+1]["Country Name"],
                CountryCode : data1[i+1]["Country Code"],
                Pop1960     : +(data1[i]["1960"]+data1[i]["1961"]+data1[i]["1962"]+data1[i]["1963"]+data1[i]["1964"]),
                Pop1965     : +(data1[i]["1965"]+data1[i]["1966"]+data1[i]["1967"]+data1[i]["1968"]+data1[i]["1969"]),
                Pop1970     : +(data1[i]["1970"]+data1[i]["1971"]+data1[i]["1972"]+data1[i]["1973"]+data1[i]["1974"]),
                Pop1975     : +(data1[i]["1975"]+data1[i]["1976"]+data1[i]["1977"]+data1[i]["1978"]+data1[i]["1979"]),
                Pop1980     : +(data1[i]["1980"]+data1[i]["1981"]+data1[i]["1982"]+data1[i]["1983"]+data1[i]["1984"]),
                Pop1985     : +(data1[i]["1985"]+data1[i]["1986"]+data1[i]["1987"]+data1[i]["1988"]+data1[i]["1989"]),
                Pop1990     : +(data1[i]["1990"]+data1[i]["1991"]+data1[i]["1992"]+data1[i]["1993"]+data1[i]["1994"]),
                Pop1995     : +(data1[i]["1995"]+data1[i]["1996"]+data1[i]["1997"]+data1[i]["1998"]+data1[i]["1999"]),
                Pop2000     : +(data1[i]["2000"]+data1[i]["2001"]+data1[i]["2002"]+data1[i]["2003"]+data1[i]["2004"]),
                Pop2005     : +(data1[i]["2005"]+data1[i]["2006"]+data1[i]["2007"]+data1[i]["2008"]+data1[i]["2009"]),
                Pop2010     : +(data1[i]["2010"]+data1[i]["2011"]+data1[i]["2012"]+data1[i]["2013"]+data1[i]["2014"]),
                Pop2015     : +(data1[i]["2015"]+data1[i]["2016"]+data1[i]["2017"]+data1[i]["2018"]+data1[i]["2019"]+data1[i]["2020"]),
                IncomeGroup : data2[i]["IncomeGroup"]                      
            })
        }
    }

}
var un=[... new Set(new_data.map(x=>x.IncomeGroup))]
console.log(un)

console.log(new_data)

function sum_income_group(i){
    function isBigEnough(value){
        return value[0]==i;
        console.log(value[0])
    }
    var filtered=new_data.map(function(d){ return [d.IncomeGroup,d.CountryCode,d.Pop1960,d.Pop1965,d.Pop1970,d.Pop1975,d.Pop1980,d.Pop1985,d.Pop1990,d.Pop1995,d.Pop2000,d.Pop2005,d.Pop2010,d.Pop2015]}).filter(isBigEnough);
    
return filtered;
}
var data_visual1=[]
for(i=0;i<un.length;i++){
    var filt,ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12;
    if(un[i] == "")
    continue;
    else
    filt=sum_income_group(un[i]);
    ans1=filt.map(x=>x[2]).reduce((a,b) => a+b,0);
    ans2=filt.map(x=>x[3]).reduce((a,b) => a+b,0);
    ans3=filt.map(x=>x[4]).reduce((a,b) => a+b,0);
    ans4=filt.map(x=>x[5]).reduce((a,b) => a+b,0);
    ans5=filt.map(x=>x[6]).reduce((a,b) => a+b,0);
    ans6=filt.map(x=>x[7]).reduce((a,b) => a+b,0);
    ans7=filt.map(x=>x[8]).reduce((a,b) => a+b,0);
    ans8=filt.map(x=>x[9]).reduce((a,b) => a+b,0);
    ans9=filt.map(x=>x[10]).reduce((a,b) => a+b,0);
    ans10=filt.map(x=>x[11]).reduce((a,b) => a+b,0);
    ans11=filt.map(x=>x[12]).reduce((a,b) => a+b,0);
    ans12=filt.map(x=>x[13]).reduce((a,b) => a+b,0);
    console.log(ans12)
    data_visual1.push({
        IncomeGroup:un[i],
        Total_pop1960:ans1,
        Total_pop1965:ans2,
        Total_pop1970:ans3,
        Total_pop1975:ans4,
        Total_pop1980:ans5,
        Total_pop1985:ans6,
        Total_pop1990:ans7,
        Total_pop1995:ans8,
        Total_pop2000:ans9,
        Total_pop2005:ans10,
        Total_pop2010:ans11,
        Total_pop2015:ans12
    })
    
}

var lst=["Total_pop1960",
"Total_pop1965",
"Total_pop1970",
"Total_pop1975",
"Total_pop1980",
"Total_pop1985",
"Total_pop1990",
"Total_pop1995",
"Total_pop2000",
"Total_pop2005",
"Total_pop2010",
"Total_pop2015",
]


var margin = {
    top: 20,
    right: 15,
    bottom: 60,
    left: 60
  },
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;


 

  var chart = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.right + margin.left+1600)
  .attr('height', height + margin.top + margin.bottom+900)
  .attr('class', 'chart')
  .attr('transform','translate(+0+'+30+')')  
  .style("border","solid")    
  
var grp1,grp2;
var x1 = d3.scaleBand()
.range([100,width+1500],0.5);

var y1 = d3.scaleLinear()
.range([height+700,height]);

var xAxis1 = d3.axisBottom(x1)

var yAxis1 = d3.axisLeft(y1)

var x = d3.scaleBand()
            .range([0, width]);

  var y = d3.scaleLinear()
            .range([height,0]);

      var xAxis = d3.axisBottom(x)

    var yAxis = d3.axisLeft(y)

    x.domain(data_visual1.map(d=>d.IncomeGroup));
    console.log(data_visual1.map(d=>d.IncomeGroup))

    function filter_value(i,j){
        function isBigEnough(value){
                return value[0]==i[0];
            }
            var filtered=new_data.map(function(d){ return [d.IncomeGroup,d.CountryCode,d[j]]}).filter(isBigEnough);
            
        return filtered;
        }
var k=0;
  function filter_data(rows,year,color){
    if(k>0)
    clean_data()
   var yr="Pop"+year.substring(9,13)
  var dats=filter_value(rows,yr);
   scatter_plot2(dats,color);
   k=k+1;
  }
  var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .text("a simple tooltip")
  .style("border","solid") 

  function scatter_plots(datas,color,year){
      console.log(color)
      var maxIncome=d3.max(datas,function(d){return d[1]});
      var minIncome=d3.min(datas,function(d){return d[1]});
     
      y.domain([minIncome,maxIncome]);
      grp1=chart.selectAll('scatters')
                 .data(datas)
                    .enter()
                    .append('g') 
                    .attr('transform','translate(+0+'+20+')')

        grp1.append('circle')
            .attr('class','circles1')
            .attr("id",function(d,i){ return 'cricle_s'+i})
            .attr('cx',function(d){                    
                        return x(d[0]);})
            .attr('cy',function(d){
                
                return y(d[1]);})
            .attr('r',7)
            .attr('fill',color)
            .attr('transform','translate(+165+'+0+')')
            .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
            .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
            .on('click',function(d){
                filter_data(d,year,color)})
                  
                
  } 
  console.log(data_visual1)
  for(i=0;i<12;i++){
      
var dat=[data_visual1.map(function(d){return [d["IncomeGroup"],d[lst[i]]]})]
console.log(dat)
var rad=(5+i)/2
var colors=["#B5D3E7","#C4DCEC","#D0E3F0","#D9E9F3","#909FA9","#A6B2BA","#B8C1C8","#D1D7DC","#9F90A9","#B2A6BA","#C1B8C8","#CDC6D3"]
console.log(colors.length) 
scatter_plots(dat[0],colors[i],lst[i]);
}

      grp1.append('g').attr('class','xaxiss')
          .call(xAxis)
          .attr('transform','translate(+100+'+height+')')

      grp1.append('g').attr('class','yaxiss')
          .call(yAxis) 
          .attr('transform','translate(+100+'+0+')') 
    
          var axisLabelX = 50;
          var axisLabelY = height/2 -30;
          var axisLabelX1 = width/2+90;
          var axisLabelY1 = height+40;
          
          
              grp1.append('g')
              .attr('transform', 'translate(' + axisLabelX + ', ' + axisLabelY + ')')
              .append('text')
              .attr('text-anchor', 'middle')
              .attr('transform', 'rotate(-90)')
              .text('Total Popilation')
              .style("font-weight","bold")

              grp1.append('g')
              .attr('transform', 'translate(' + axisLabelX1 + ', ' + axisLabelY1 + ')')
              .append('text')
              .attr('text-anchor', 'middle')
              .attr('transform', 'rotate(0)')
              .text('IncomeGroup')
              .style("font-weight","bold")
              
              


          function scatter_plot2(datas1,color){
            console.log(datas1)
            var maxIncome1 =d3.max(datas1,function(d){return d[2]});
            var minIncome1 =d3.min(datas1,function(d){return d[2]});     
            y1.domain([minIncome1,maxIncome1]);
            x1.domain(datas1.map(d=>d[1]));
            
             grp2=chart.selectAll('scatters')
                        .data(datas1)
                          .enter()
                          .append('g')  
                          .attr('transform',"translate("+80+",70)")
                          


                          grp2.append('g').attr('class','xaxiss1')
                          .call(xAxis1)
                          .attr('transform','translate(+0+'+(height+700)+')')
                
                          grp2.append('g').attr('class','yaxiss1')
                          .call(yAxis1) 
                          .attr('transform','translate(+100+'+0+')')    

             grp2.append('circle')
                .attr('class','circless1')
                .attr("id",function(d,i){ return 'cricles_s'+i})
                 .attr('cx',function(d){                        
                         return x1(d[1]);})
                 .attr('cy',function(d){
                             return y1(d[2]);})
                 .attr('r',7)
                 .attr('fill',color)
                 .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
            .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
            .attr('transform','translate(+35+'+0+')') 
            
            var axisLabelX2 = -40;
          var axisLabelY2 = height*2 -150;
          var axisLabelX12 = width/2+500;
          var axisLabelY12 = height*2+230;
          grp2.append('g')
              .attr('transform', 'translate(' + axisLabelX2 + ', ' + axisLabelY2 + ')')
              .append('text')
              .attr('text-anchor', 'middle')
              .attr('transform', 'rotate(-90)')
              .text('Total Popilation')
              .style("font-weight","bold")

              grp2.append('g')
              .attr('transform', 'translate(' + axisLabelX12 + ', ' + axisLabelY12 + ')')
              .append('text')
              .attr('text-anchor', 'middle')
              .attr('transform', 'rotate(0)')
              .text('Country in Selected Income Group')
              .style("font-weight","bold")
                
                   }
                   
                   

                    
       function clean_data(){
           grp2.selectAll("circle").remove()
           grp2.selectAll("g.yaxiss1").remove()
           grp2.selectAll("g.xaxiss1").remove()
       }       
                    
});

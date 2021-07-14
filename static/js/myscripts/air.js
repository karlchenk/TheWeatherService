
var airChart = echarts.init(document.getElementById("airChart"));


var indicator = [
    {name: 'AQI', max: 150},
    {name: 'PM2.5', max: 125},
    {name: 'PM10', max: 150},
    {name: 'O3', max: 200},
    {name: 'NO2', max: 100},
    {name: 'SO2', max: 50},
    {name: 'CO', max: 5}
];

var airDims = {
    index:0,
    name:1,
    desc:2
};

function renderText(param, api) {
    var y = 45+30*api.value(airDims.index)
    return {
        type: 'group',
        children: [
          {
            type: 'text',
            style: {
                text: indicator[api.value(airDims.index)].name,
                textFont: api.font({fontSize: 14}),
                fill:'rgba(30,144,255,0.65)',
                textAlign: 'left',
                textVerticalAlign: 'bottom'
            },
            position: [280, y]
        }, {
            type: 'text',
            style: {
                text: api.value(airDims.desc),
                textFont: api.font({fontSize: 14}),
                fill:'rgba(30,144,255,0.8)',
                textAlign: 'left',
                textVerticalAlign: 'bottom'
            },
            position: [340,y]
        }]
    };
}


var radarColor = ['#40C4FB','#e9df3d', '#f79c19', '#21fcd6', '#1F58F7', '#08c8ff', '#df4131'];

var renderSeries = [{
    type: 'radar',        
    data: [],
    symbol: 'none',
    lineStyle: {
        normal: {
            color: 'rgb(64,196,251)',
            width: 2
        }
    },
    itemStyle: {
        color: '#40C4FB'
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(64,196,251,0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(40,75,149,0.8)'
                }],
                false)
        }
    }
}];

radarColor.forEach(function(d,i){
    var value = ['','','','','','','']
    value[i] = indicator[i].max,
    renderSeries.push({
        type: 'radar',    
        data: [value],
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: radarColor[i],
            }
        }
    })
})

renderSeries.push({
    type: 'custom',
    renderItem: renderText,
    zlevel:10,
    data: [],
});

var airOption = {

    tooltip: {
        show:true,
        trigger: 'item'
    },
    stack: true,
    grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    },
    xAxis: {
        data: [],
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    radar: {
        indicator: indicator,
        shape: 'circle',
        radius: "70%",
        center: ["30%", "55%"],
        splitNumber: 6,
        name: {
            textStyle: {
                color: 'rgb(106,90,205)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(106,90,205, 0.1)', 'rgba(106,90,205, 0.2)',
                    'rgba(106,90,205, 0.4)', 'rgba(106,90,205, 0.6)',
                    'rgba(106,90,205, 0.8)', 'rgba(106,90,205, 1)'
                ].reverse()
            }
        },
        splitArea: {
            // show: false
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLine: {
            show:true,
            lineStyle: {
                color: 'rgba(106,90,205, 0.5)'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
    },
    series: []
};



function updateAirChart(airData){
    renderSeries[0].data= [airData.value];
    // console.log(airData);
    // var airDesc = airData.desc;
    // console.log(airDesc);

    renderSeries[8].data = [
        [0,"污染指数",airData.desc[0]],
        [1,"PM2.5",airData.desc[1]],
        [2,"PM10",airData.desc[2]],
        [3,"O3",airData.desc[3]],
        [4,"NO2",airData.desc[4]],
        [5,"SO2",airData.desc[5]],
        [6,"CO",airData.desc[6]],
    ];
    airOption.series = renderSeries;
    airChart.setOption(airOption);
    console.log("");
};
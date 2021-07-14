/**
 * 室内温度 变化序列
*/

var indoor_temperature_sequence = echarts.init(document.getElementById("indoor-temperature-sequence"),"macarons");

var temperature_seq_option = {
    
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        },
        textStyle:{
            color:'rgb(64,196,251)'
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['室温'],
        right: '25px',
        top: '5px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        x: 50,
        y: 30,
        x2: 25,
        y2: 20
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: []
    }],
    yAxis: [{
        type: 'value',
        scale:true,
        // min:20,
        // max:35,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [ {
        name: '室温',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data: []
    }]
};

// temperature_seq_option && indoor_temperature_sequence.setOption(temperature_seq_option);



/**
 * 室内湿度 变化序列
*/
var indoor_humidity_sequence = echarts.init(document.getElementById('indoor-humidity-sequence'),"macarons");
var humidity_seq_option = {
    color: ['#00DDFF'],
    // title: {
    //     text: '渐变堆叠面积图'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle:{
            color:'rgb(64,196,251)'
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['湿度'],
        right: '25px',
        top: '5px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        x: 35,
        y: 30,
        x2: 25,
        y2: 20
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            emphasis: {
                focus: 'series'
            },
            data: []
        }
    ],
    
    yAxis: [
        {
            type: 'value',
            scale:true,
            // min:35,
            // max:80,
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
        }
    ],
    series: [{
            name: '湿度',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: []
        }]
};



/**
 * 室内气压 变化序列
*/

var indoor_pressure_sequence = echarts.init(document.getElementById('indoor-pressure-sequence'),"macarons");
var pressure_seq_option = {
        title: {
            text: '',
            left: '1%'
        },
        tooltip: {
            trigger: 'axis',
            textStyle:{
                color:'rgb(64,196,251)'
            }

        },
        grid: {
            x: 45,
            y: 30,
            x2: 15,
            y2: 20
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: []
        }],
        yAxis: {
            type: 'value',
            scale:true,
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
            
        // visualMap: {
        //     top: 0,
        //     right: 0,
        //     show:false,
        //     pieces: [{
        //         gt: 0,
        //         lte: 950,
        //         color: '#93CE07'
        //     }, {
        //         gt: 950,
        //         lte: 1013,
        //         color: '#FBDB0F'
        //     }, {
        //         gt: 1013,
        //         lte: 1050,
        //         color: '#FC7D02'
        //     }, {
        //         gt: 1050,
        //         color: '#FD0100'
        //     }],
        //     outOfRange: {
        //         color: '#999'
        //     }
        // },
        series: [{
            name: '气压',
            type: 'line',
            data: [],
        
        }]
};

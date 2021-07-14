
/**
 * 室内温度
*/
var indoor_temperature_chart = echarts.init(document.getElementById('indoor-temperature-chart'));

var temperature_option = {
    series: [{
        type: 'gauge',
        radius:'95%',
        startAngle: 140,
        endAngle: -140,
        min:-30,
        max:50,
        pointer: {
            show: false
        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
                borderWidth: 1,
                borderColor: "#30D27C",
                opacity:0.65
            }
        },
        
        axisLine: {
            roundCap: true,
            lineStyle: {
                width: 15,
                color: [
                    [1,new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#0B95FF"
                      },
                      {
                        offset: 0.65,
                        color: "#30D27C"
                      },
                      {
                        offset: 1,
                        color: "#FFC600"
                      }
                    ])
                  ]
                ]

            }
        },
        splitLine: {
            show: false,
            distance: 0,
            length: 10
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 50
        },
        data: [{
            value: 20,
            name: '',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                offsetCenter: ['0%', '0%']
            }
        }
        ],
        title: {
            fontSize: 14
        },
        detail: {
            width: 50,
            height: 24,
            fontSize: 24,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 0,
            formatter: "{value}°C"
        }
    }]
};


/**
 * 室内湿度 水球图
*/

var indoor_humidity_ball = echarts.init(document.getElementById("indoor-humidity-ball"),"macarons");

var humidity_option = {
    series: [{
        type: 'liquidFill',
        radius: '90%',
        label: {
            show: true,
            fontSize:25
        },
        itemStyle: {
            shadowBlur: 0
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 4,
                borderColor: '#294d99',
                shadowBlur:8,
                shadowColor:'rgba(23,201,95,0.8)'
            }
        },
        data: [0.6,0.6*0.8,0.6*0.7,0.6*0.6],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: 'rgba(45,83,223,0.5)',
            color: 'rgba(27,50,105,0.5)',
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        }
    }]
};


/**
 * 室内气压 仪表盘
 * 
*/
var indoor_pressure_chart = echarts.init(document.getElementById('indoor-pressure-chart'));
var pressure_option = {
    series: [{
        type: 'gauge',
        radius:'95%',
        min:900,
        max:1100,
        axisLine: {
            lineStyle: {
                width: 15,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        pointer: {
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            distance: -15,
            length: 4,
            lineStyle: {
                color: '#fff',
                width: 1
            }
        },
        splitLine: {
            distance: -15,
            length: 7,
            lineStyle: {
                color: '#fff',
                width: 1
            }
        },
        axisLabel: {
            color: 'auto',
            distance: 22,
            fontSize: 10
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}',
            color: 'auto',
            fontSize:18
        },
        data: [{
            value: 70
        }]
    }]
};



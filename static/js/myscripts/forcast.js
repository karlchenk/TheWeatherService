
var forcastCharts = [
    echarts.init(document.getElementById('forcastChart1')),
    echarts.init(document.getElementById('forcastChart2')),
    echarts.init(document.getElementById('forcastChart3'))
];

var forcastOption;

var weatherData;

var weaDims = {
    index: 0,
    time: 1,
    img: 2,
    tem: 3,
    win: 4,
    aqi: 5
};


var weatherIcons = {
    'bingbao': '../static/img/weather_img/bingbao.png',
    'lei': '../static/img/weather_img/lei.png',
    'qing': '../static/img/weather_img/qing.png',
    'shacheng': '../static/img/weather_img/shacheng.png',
    'wu': '../static/img/weather_img/wu.png',
    'xue': '../static/img/weather_img/xue.png',
    'yin': '../static/img/weather_img/yin.png',
    'yu': '../static/img/weather_img/yu.png',
    'yun': '../static/img/weather_img/yun.png',
    
};

// var forcastData = [
//     {'hours': '14', 'wea_img': 'yu', 'tem': '31', 'win': '东北风1级', 'aqi': '优'},
//     {'hours': '15', 'wea_img': 'yu', 'tem': '31', 'win': '东风2级', 'aqi': '优'},
//     {'hours': '16', 'wea_img': 'yu', 'tem': '31', 'win': '东风2级', 'aqi': '优'},
//     {'hours': '17', 'wea_img': 'yu', 'tem': '31', 'win': '东风2级', 'aqi': '优'},
//     {'hours': '18', 'wea_img': 'yu', 'tem': '30', 'win': '东风3级', 'aqi': '优'},
//     {'hours': '19', 'wea_img': 'yu', 'tem': '29', 'win': '东南风3级', 'aqi': '优'},
//     {'hours': '20', 'wea_img': 'yu', 'tem': '28', 'win': '东南风2级', 'aqi': '优'},
//     {'hours': '21', 'wea_img': 'yun', 'tem': '27', 'win': '东风2级', 'aqi': '优'},
//     {'hours': '22', 'wea_img': 'yun', 'tem': '26', 'win': '东南风2级', 'aqi': '优'},
//     {'hours': '23', 'wea_img': 'qing', 'tem': '24', 'win': '东南风2级', 'aqi': '优'},
//     {'hours': '07/12', 'wea_img': 'qing', 'tem': '24', 'win': '东南风1级', 'aqi': '优'},
//     {'hours': '01', 'wea_img': 'qing', 'tem': '24', 'win': '东北风1级', 'aqi': '优'},
//     {'hours': '02', 'wea_img': 'qing', 'tem': '24', 'win': '东风1级', 'aqi': '优'},
//     {'hours': '03', 'wea_img': 'qing', 'tem': '24', 'win': '东风1级', 'aqi': '优'},
//     {'hours': '04', 'wea_img': 'qing', 'tem': '24', 'win': '东北风1级', 'aqi': '优'},
//     {'hours': '05', 'wea_img': 'qing', 'tem': '24', 'win': '东风1级', 'aqi': '优'},
//     {'hours': '06', 'wea_img': 'qing', 'tem': '24', 'win': '东北风1级', 'aqi': '优'},
//     {'hours': '07', 'wea_img': 'qing', 'tem': '26', 'win': '东北风1级', 'aqi': '优'},
//     {'hours': '08', 'wea_img': 'qing', 'tem': '26', 'win': '东风1级', 'aqi': '优'},
//     {'hours': '09', 'wea_img': 'qing', 'tem': '28', 'win': '西北风1级', 'aqi': '优'},
//     {'hours': '10', 'wea_img': 'qing', 'tem': '30', 'win': '西北风1级', 'aqi': '优'},
//     {'hours': '11', 'wea_img': 'qing', 'tem': '32', 'win': '西风1级', 'aqi': '优'}, 
//     {'hours': '12', 'wea_img': 'qing', 'tem': '33', 'win': '西风1级', 'aqi': '优'}
// ];



var weatherIconSize = 34;

function renderWeather(param, api) {
    
    var y = 35+40*api.value(weaDims.index);

    var time = api.value(weaDims.time);
    if(window.isNaN(time)){
        time = 0;
    }
    return {
        type: 'group',
        children: [{
            type: 'text',
            style: {
                text: time+':00',
                textFont: api.font({fontSize: 22}),
                textAlign: 'center',
                fill:'#FFFAFA',
                textVerticalAlign: 'bottom'
            },
            position: [40,y]
        },{
            type: 'image',
            style: {
                image: api.value(weaDims.img),
                x: -weatherIconSize / 2,
                y: -weatherIconSize / 2,
                width: weatherIconSize,
                height: weatherIconSize
            },
            position: [130,y-10]
        }, {
            type: 'text',
            style: {
                text: api.value(weaDims.tem) + '°C',
                textFont: api.font({fontSize: 22}),
                fill:'#FFFAFA',
                textAlign: 'center',
                textVerticalAlign: 'bottom'
            },
            position: [215, y]
        }, {
            type: 'text',
            style: {
                text: api.value(weaDims.win),
                textFont: api.font({fontSize: 20}),
                fill:'#FFFAFA',
                textAlign: 'left',
                textVerticalAlign: 'bottom'
            },
            position: [270, y]
        }, {
            type: 'text',
            style: {
                text: api.value(weaDims.aqi),
                textFont: api.font({fontSize: 22}),
                fill:'#FFFAFA',
                textAlign: 'left',
                textVerticalAlign: 'bottom'
            },
            position: [380, y]
        }]
    };
}

forcastOption = [{
        grid: {
            x: 35,
            y: 30,
            x2: 10,
            y2: 20
        },
        xAxis: {
            type: 'time',
            show:false,
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
        },
        
        series: {
            type: 'custom',
            renderItem: renderWeather,
            data: []
        }
    },{
        grid: {
            x: 35,
            y: 30,
            x2: 10,
            y2: 20
        },
        xAxis: {
            type: 'time',
            show:false,
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
        },
        
        series: {
            type: 'custom',
            renderItem: renderWeather,
            data: []
        }
    },{
        grid: {
            x: 35,
            y: 30,
            x2: 10,
            y2: 20
        },
        xAxis: {
            type: 'time',
            show:false,
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
        },
        
        series: {
            type: 'custom',
            renderItem: renderWeather,
            data: []
        }
    }
];


function updateForcastChart(forcastData){
    weatherData = [
        forcastData.slice(0,8).map(function(entry,index){
            return [
                index,
                entry.hours,
                weatherIcons[entry.wea_img],
                entry.tem,
                entry.win,
                entry.aqi
        ];}),
        forcastData.slice(8,16).map(function(entry,index){
            return [index,entry.hours,weatherIcons[entry.wea_img],entry.tem,entry.win,entry.aqi];
        }),
        forcastData.slice(16).map(function(entry,index){
            return [index,entry.hours,weatherIcons[entry.wea_img],entry.tem,entry.win,entry.aqi];
        })
    ];
    forcastOption[0].series.data = weatherData[0];
    forcastOption[1].series.data = weatherData[1];
    forcastOption[2].series.data = weatherData[2];
    forcastCharts[0].setOption(forcastOption[0]);
    forcastCharts[1].setOption(forcastOption[1]);
    forcastCharts[2].setOption(forcastOption[2]);

};
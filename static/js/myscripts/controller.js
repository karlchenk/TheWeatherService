
function get_date(){
    $.ajax({
        url:"/date",
        timeout:3000,
        success:function(data){
            $("#date").html(data)
        },
        error:function(xhr,type,errorThrow){

        }
    });
}
function get_time(){
    $.ajax({
        url:"/time",
        timeout:3000,
        success:function(data){
            $("#realtime").html(data)
        },
        error:function(xhr,type,errorThrow){}
    });
}


function update_indoor_charts(indoor_data){
    var temperature = indoor_data["now"][0];
    $("#tem").html(temperature+"°C")
    temperature_option.series[0].data[0].value = temperature;
    indoor_temperature_chart.setOption(temperature_option);

    var humidity = indoor_data["now"][1];
    $("#hum").html(humidity+"%")
    humidity_option.series[0].data = [humidity*0.01,humidity*0.008,humidity*0.007,humidity*0.006];
    indoor_humidity_ball.setOption(humidity_option);
    
    var pressure = indoor_data["now"][2];
    $("#pres").html(pressure+"hPa")
    pressure_option.series[0].data[0].value = pressure;
    indoor_pressure_chart.setOption(pressure_option);
}
function update_indoor_sequence(indoor_data){
    var time = indoor_data["time"];

    temperature_seq_option.xAxis[0].data = time;
    temperature_seq_option.series[0].data = indoor_data["tem"];
    indoor_temperature_sequence.setOption(temperature_seq_option,true);

    humidity_seq_option.xAxis[0].data = time;
    humidity_seq_option.series[0].data = indoor_data["hum"];
    indoor_humidity_sequence.setOption(humidity_seq_option),true;

    pressure_seq_option.xAxis[0].data = time;
    pressure_seq_option.series[0].data = indoor_data["pres"];
    indoor_pressure_sequence.setOption(pressure_seq_option,true);
}



function get_indoor_data(){
    $.ajax({
        url:"/indoor",
        timeout:3000,
        success:function(data){

            /**
             * 更新 室内数据 相关图表
             * 
             * data = {
             *      "time":[...],
             *      "tem":[...],
             *      "hum":[...],
             *      "pres":[...],
             *      "now":[tem_now,hum_now,pres_now]
             * }
             * 
             * 实时温度、温度变化
             * 实时湿度、湿度变化
             * 实时气压、气压变化
             */ 
            update_indoor_charts(data);
            update_indoor_sequence(data);
            
            
        },
        error:function(xhr,type,errorThrow){}
    });
}

function get_weather_data(){
    $.ajax({
        url:"/outdoor",
        timeout:3000,
        success:function(data){

            /**
             * 更新 室外数据 相关图表和图像
             * 
             * data = {
             *      "now":[weather_now,tem,tem_max,tem_min],
             *      "life-index":[],
             *      "wind":[],
             *      "humidity":"none",
             *      "pressure":"none",
             *      "air":{},
             *      "forcast":[]
             * }
             * 实时温度 （图标、数字）    
             * 空气质量
             * 天气预报
             * 生活指数
             */
            var now = data["now"];
            $("#weather_img").attr("src", weatherIcons[now[0]]);
            $("#tem1").html(now[1]+"°C");
            $("#tem2").html(now[2]+"°C"+" / "+now[3]+"°C");
       
            updateForcastChart(data["forcast"]);
            updateLifeChart(data["life-index"]);
            updateAirChart(data["air"]);

        },
        error:function(xhr,type,errorThrow){}
    });

}


get_date()
get_time()

get_indoor_data()
get_weather_data()



setInterval(get_date,1000)
setInterval(get_time,1000)

setInterval(get_indoor_data,10000)
setInterval(get_weather_data,10000)



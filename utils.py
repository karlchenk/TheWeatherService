import time
import pymysql
import requests
import json
import random


## 可以去 天气api 网站注册账号
# https://www.tianqiapi.com
account = [{
    "appid":87829331, 
    "appsecret":"Kyok3Dfy"
}]


local_indoor_data = (('2021-07-08 11:13:43', '27.03', '54.57', '956.88'), ('2021-07-08 11:13:33', '27.03', '54.55', '956.88'), ('2021-07-08 11:13:23', '27.03', '54.55', '956.86'), ('2021-07-08 11:13:13', '27.05', '54.57', '956.85'), ('2021-07-08 11:13:03', '27.05', '54.58', '956.90'), ('2021-07-08 11:12:53', '27.06', '54.52', '956.94'), ('2021-07-08 11:12:43', '27.04', '54.51', '956.92'), ('2021-07-08 11:12:33', '27.05', '54.53', '956.93'), ('2021-07-08 11:12:23', '27.04', '54.55', '956.86'), ('2021-07-08 11:12:13', '27.04', '54.48', '956.89'), ('2021-07-08 11:12:03', '27.06', '54.31', '956.97'), ('2021-07-08 11:11:53', '27.05', '54.09', '956.95'), ('2021-07-08 11:11:43', '27.05', '54.10', '956.90'), ('2021-07-08 10:11:58', '27.10', '53.70', '957.33'), ('2021-07-08 10:11:48', '27.09', '53.74', '957.29'), ('2021-07-08 10:11:38', '27.11', '53.79', '957.32'), ('2021-07-08 10:11:28', '27.11', '53.77', '957.26'), ('2021-07-08 10:11:18', '27.12', '53.84', '957.33'), ('2021-07-08 10:11:08', '27.11', '53.83', '957.30'), ('2021-07-08 10:10:58', '27.11', '53.83', '957.26'), ('2021-07-08 10:10:48', '27.12', '53.94', '957.33'), ('2021-07-08 10:10:38', '27.11', '53.88', '957.31'), ('2021-07-08 10:10:28', '27.12', '53.88', '957.33'), ('2021-07-08 10:10:18', '27.11', '53.93', '957.32'), ('2021-07-08 10:10:08', '27.12', '53.90', '957.28'), ('2021-07-08 10:09:58', '27.11', '53.85', '957.29'), ('2021-07-08 10:09:48', '27.11', '53.83', '957.32'), ('2021-07-08 10:09:38', '27.12', '54.02', '957.25'), ('2021-07-08 10:09:28', '27.12', '54.02', '957.31'), ('2021-07-08 10:09:18', '27.12', '54.08', '957.28'), ('2021-07-08 10:09:08', '27.12', '54.16', '957.31'), ('2021-07-08 10:08:58', '27.13', '54.15', '957.29'), ('2021-07-08 10:08:48', '27.13', '54.16', '957.30'), ('2021-07-08 10:08:38', '27.13', '54.18', '957.27'), ('2021-07-08 10:08:28', '27.13', '54.19', '957.29'), ('2021-07-08 10:08:18', '27.13', '54.18', '957.24'), ('2021-07-08 10:08:07', '27.14', '54.21', '957.31'), ('2021-07-08 10:07:57', '27.14', '54.23', '957.29'), ('2021-07-08 10:07:47', '27.14', '54.20', '957.31'), ('2021-07-08 10:07:37', '27.16', '54.15', '957.30'), ('2021-07-08 10:07:27', '27.16', '54.18', '957.21'), ('2021-07-08 10:07:17', '27.16', '54.17', '957.30'), ('2021-07-08 10:07:07', '27.17', '54.11', '957.28'), ('2021-07-08 10:06:57', '27.17', '54.22', '957.21'), ('2021-07-08 10:06:47', '27.16', '54.16', '957.26'), ('2021-07-08 10:06:37', '27.17', '54.26', '957.26'), ('2021-07-08 10:06:27', '27.17', '54.16', '957.25'), ('2021-07-08 10:06:17', '27.17', '53.97', '957.28'), ('2021-07-08 10:06:07', '27.17', '54.10', '957.31'), ('2021-07-08 10:05:57', '27.18', '53.97', '957.32'), ('2021-07-08 10:05:47', '27.19', '54.24', '957.26'), ('2021-07-08 10:05:37', '27.20', '54.08', '957.33'), ('2021-07-08 10:05:27', '27.20', '54.11', '957.25'), ('2021-07-08 10:05:17', '27.20', '54.01', '957.28'), ('2021-07-08 10:05:07', '27.20', '53.94', '957.28'), ('2021-07-08 10:04:57', '27.19', '53.93', '957.34'), ('2021-07-08 10:04:47', '27.21', '53.91', '957.29'), ('2021-07-08 10:04:37', '27.21', '53.82', '957.32'), ('2021-07-08 10:04:27', '27.21', '53.88', '957.24'), ('2021-07-08 10:04:17', '27.21', '53.97', '957.26'), ('2021-07-08 10:04:07', '27.22', '53.93', '957.30'), ('2021-07-08 10:03:56', '27.21', '53.87', '957.26'), ('2021-07-08 10:03:46', '27.20', '53.76', '957.30'), ('2021-07-08 10:03:36', '27.21', '53.66', '957.34'), ('2021-07-08 10:03:26', '27.20', '53.74', '957.31'), ('2021-07-08 10:03:16', '27.21', '53.86', '957.27'), ('2021-07-08 10:03:06', '27.21', '54.38', '957.32'), ('2021-07-08 10:02:56', '27.20', '53.93', '957.20'), ('2021-07-08 10:02:46', '27.20', '53.92', '957.31'), ('2021-07-08 10:02:36', '27.21', '53.82', '957.24'), ('2021-07-08 10:02:26', '27.20', '53.80', '957.35'), ('2021-07-08 10:02:16', '27.20', '53.85', '957.33'), ('2021-07-08 10:02:06', '27.20', '53.81', '957.25'), ('2021-07-08 10:01:56', '27.20', '53.87', '957.30'), ('2021-07-08 10:01:46', '27.20', '53.95', '957.25'), ('2021-07-08 10:01:36', '27.21', '53.91', '957.32'), ('2021-07-08 10:01:26', '27.21', '53.98', '957.29'), ('2021-07-08 10:01:16', '27.20', '54.18', '957.31'), ('2021-07-08 10:01:06', '27.20', '54.14', '957.30'), ('2021-07-08 10:00:56', '27.20', '54.09', '957.31'), ('2021-07-08 10:00:46', '27.20', '53.95', '957.30'), ('2021-07-08 10:00:36', '27.19', '53.84', '957.29'), ('2021-07-08 10:00:26', '27.20', '53.94', '957.30'), ('2021-07-08 10:00:16', '27.19', '53.94', '957.31'), ('2021-07-08 10:00:06', '27.19', '53.79', '957.37'), ('2021-07-08 09:59:56', '27.18', '53.76', '957.32'), ('2021-07-08 09:59:45', '27.20', '53.81', '957.33'), ('2021-07-08 09:59:35', '27.20', '53.73', '957.31'), ('2021-07-08 09:59:25', '27.21', '53.82', '957.29'), ('2021-07-08 09:59:15', '27.22', '53.93', '957.28'), ('2021-07-08 09:59:05', '27.21', '53.88', '957.34'), ('2021-07-08 09:58:55', '27.20', '53.93', '957.31'), ('2021-07-08 09:58:45', '27.22', '54.07', '957.38'), ('2021-07-08 09:58:35', '27.22', '54.10', '957.30'), ('2021-07-08 09:58:25', '27.21', '54.44', '957.38'), ('2021-07-08 09:58:15', '27.22', '54.27', '957.33'), ('2021-07-08 09:58:05', '27.22', '54.06', '957.28'), ('2021-07-08 09:57:55', '27.21', '53.77', '957.35'), ('2021-07-08 09:57:45', '27.21', '53.97', '957.32'), ('2021-07-08 09:57:35', '27.20', '53.98', '957.31'), ('2021-07-08 09:57:25', '27.21', '54.14', '957.32'), ('2021-07-08 09:57:15', '27.21', '54.31', '957.34'), ('2021-07-08 09:57:05', '27.19', '54.21', '957.32'), ('2021-07-08 09:56:55', '27.20', '54.50', '957.35'), ('2021-07-08 09:56:45', '27.18', '54.63', '957.33'), ('2021-07-08 09:56:35', '27.19', '54.77', '957.32'), ('2021-07-08 09:56:25', '27.19', '54.84', '957.31'), ('2021-07-08 09:56:15', '27.19', '54.82', '957.34'), ('2021-07-08 09:56:05', '27.18', '54.64', '957.35'), ('2021-07-08 09:55:55', '27.18', '54.82', '957.33'), ('2021-07-08 09:55:45', '27.17', '55.07', '957.37'), ('2021-07-08 09:55:35', '27.18', '55.11', '957.35'), ('2021-07-08 09:55:24', '27.17', '55.14', '957.34'), ('2021-07-08 09:55:14', '27.17', '54.92', '957.33'), ('2021-07-08 09:55:04', '27.16', '54.93', '957.30'), ('2021-07-08 09:54:54', '27.16', '54.99', '957.30'), ('2021-07-08 09:54:44', '27.16', '54.97', '957.29'), ('2021-07-08 09:54:34', '27.17', '55.41', '957.37'), ('2021-07-08 09:54:24', '27.16', '55.02', '957.35'), ('2021-07-08 09:54:14', '27.16', '54.93', '957.31'), ('2021-07-08 09:54:04', '27.17', '54.99', '957.38'), ('2021-07-08 09:53:54', '27.17', '55.12', '957.34'), ('2021-07-08 09:53:44', '27.17', '55.10', '957.30'), ('2021-07-08 09:53:34', '27.18', '55.00', '957.37'), ('2021-07-08 09:53:24', '27.19', '55.14', '957.37'), ('2021-07-08 09:53:14', '27.18', '55.18', '957.37'), ('2021-07-08 09:53:04', '27.17', '55.17', '957.34'), ('2021-07-08 09:52:54', '27.17', '55.55', '957.34'), ('2021-07-08 09:52:44', '27.16', '55.27', '957.34'), ('2021-07-08 09:52:34', '27.15', '55.09', '957.31'), ('2021-07-08 09:52:24', '27.14', '54.98', '957.50'), ('2021-07-08 09:52:14', '27.15', '55.09', '957.28'), ('2021-07-08 09:52:04', '27.15', '55.16', '957.36'), ('2021-07-08 09:51:54', '27.15', '55.23', '957.35'), ('2021-07-08 09:51:44', '27.14', '55.18', '957.32'), ('2021-07-08 09:51:34', '27.15', '55.21', '957.35'), ('2021-07-08 09:51:23', '27.12', '55.25', '957.29'), ('2021-07-08 09:51:13', '27.14', '55.24', '957.34'), ('2021-07-08 09:51:03', '27.14', '55.35', '957.36'), ('2021-07-08 09:50:53', '27.14', '55.25', '957.34'), ('2021-07-08 09:50:43', '27.14', '55.33', '957.34'), ('2021-07-08 09:50:33', '27.14', '55.39', '957.34'), ('2021-07-08 09:50:23', '27.13', '55.57', '957.30'), ('2021-07-08 09:50:13', '27.14', '55.96', '957.36'), ('2021-07-08 09:50:03', '27.11', '55.07', '957.32'), ('2021-07-08 09:49:53', '27.12', '55.44', '957.33'), ('2021-07-08 09:49:43', '27.12', '55.42', '957.33'), ('2021-07-08 09:49:33', '27.14', '55.63', '957.32'), ('2021-07-08 09:49:23', '27.14', '55.61', '957.36'), ('2021-07-08 09:49:13', '27.15', '55.53', '957.33'), ('2021-07-08 09:49:03', '27.14', '55.53', '957.32'), ('2021-07-08 09:48:53', '27.14', '55.48', '957.29'), ('2021-07-08 09:48:43', '27.16', '55.53', '957.31'), ('2021-07-08 09:48:33', '27.16', '55.40', '957.31'), ('2021-07-08 09:48:23', '27.16', '55.33', '957.34'), ('2021-07-08 09:48:13', '27.18', '55.50', '957.37'), ('2021-07-08 09:48:03', '27.18', '55.46', '957.32'), ('2021-07-08 09:47:53', '27.19', '55.57', '957.36'), ('2021-07-08 09:47:43', '27.20', '55.56', '957.31'), ('2021-07-08 09:47:33', '27.19', '55.67', '957.34'), ('2021-07-08 09:47:23', '27.20', '55.90', '957.36'), ('2021-07-08 09:47:12', '27.21', '56.20', '957.35'), ('2021-07-08 09:47:02', '27.21', '56.10', '957.29'), ('2021-07-08 09:46:52', '27.21', '56.21', '957.32'), ('2021-07-08 09:46:42', '27.22', '56.49', '957.30'), ('2021-07-08 09:46:32', '27.23', '56.93', '957.35'), ('2021-07-08 09:46:22', '27.23', '56.79', '957.29'), ('2021-07-08 09:46:12', '27.24', '56.82', '957.34'), ('2021-07-08 09:46:02', '27.23', '56.57', '957.32'), ('2021-07-08 09:45:52', '27.23', '56.72', '957.35'), ('2021-07-08 09:45:42', '27.23', '56.96', '957.41'), ('2021-07-08 09:45:32', '27.24', '57.01', '957.34'), ('2021-07-08 09:45:22', '27.23', '57.32', '957.35'), ('2021-07-08 09:45:12', '27.23', '57.03', '957.32'), ('2021-07-08 09:45:02', '27.23', '56.58', '957.40'), ('2021-07-08 09:44:52', '27.23', '56.55', '957.28'), ('2021-07-08 09:44:42', '27.25', '56.47', '957.33'), ('2021-07-08 09:44:32', '27.25', '56.50', '957.33'), ('2021-07-08 09:44:22', '27.25', '56.33', '957.33'), ('2021-07-08 09:44:12', '27.26', '56.54', '957.29'))

class IndoorData:
    def __init__(self, 
            host="127.0.0.1", 
            user="root", 
            passwd="123456", 
            db="indoordata", 
            charset='utf8'
        ):
        self.host=host
        self.user=user
        self.passwd=passwd
        self.db=db
        self.charset=charset
        self.cursor, self.conn = None, None

    def getConn(self):
        try:
            self.conn = pymysql.connect(
                host=self.host,
                user=self.user,
                passwd=self.passwd,
                db=self.db,
                charset=self.charset
            )
            self.cursor = self.conn.cursor()
            return True
        except pymysql.Error as e:
            print(e)
            return False

    def closeConn(self):
        try:
            if self.conn:
                self.conn.close()
        except pymysql.Error as e:
            print('Error: %s' % e)

    def query(self, sql):
        self.getConn()
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        self.closeConn()
        return result

    def getData(self):
        sql = """
              select 
                CAST(CREATED AS CHAR),
                CAST(AMBIENT_TEMPERATURE AS CHAR),
                CAST(HUMIDITY AS CHAR),
                CAST(AIR_PRESSURE AS CHAR)
                    from WEATHER 
                    order by CREATED desc limit 180;
        """
        result = self.query(sql)
        
        data = {"time":[],"tem":[],"hum":[],"pres":[],"now":[]}

        length = len(result)
        for i in range(length-1,-1,-1):
            data["time"].append(result[i][0].split(' ')[1])
            data["tem"].append(float(result[i][1]))
            data["hum"].append(float(result[i][2]))
            data["pres"].append(float(result[i][3]))
            
        data["now"] = [float(result[0][1]),float(result[0][2]),float(result[0][3])]
        return data

def getLocalData():
    result = local_indoor_data
    data = {"time":[],"tem":[],"hum":[],"pres":[],"now":[]}
    length = len(result)

    ##
    # 本地数据
    # #
    for i in range(length-1,-1,-1):
        data["time"].append(result[i][0].split(' ')[1])
        data["tem"].append(float(result[i][1]))
        data["hum"].append(float(result[i][2]))
        data["pres"].append(float(result[i][3]))
        
    data["now"] = [float(result[0][1]),float(result[0][2]),float(result[0][3])]
        
    # #
    # 随机数据
    # #
    # for i in range(length-1,-1,-1):
    #     data["time"].append(result[i][0].split(' ')[1])
    #     data["tem"].append(random.randint(25,29))
    #     data["hum"].append(random.randint(50,60))
    #     data["pres"].append(random.randint(950,970))
        
    # data["now"] = [random.randint(25,29),random.randint(50,60),random.randint(950,970)]
    
    return data

class OutdoorData:
    def __init__(self,
            appid=account[0]["appid"],
            appsecret=account[0]["appsecret"],
            city="西安",
            DEBUG=True
        ):
        self.appid = appid
        self.appsecret = appsecret
        self.city = city
        self.DEBUG=DEBUG


    def getData(self, url):
        result = requests.get(url).text
        data = json.loads(result)

        f = open("saved_pro.json", 'w')
        f.write(json.dumps(data, indent=4, separators=(', ', ': ')))
        f.close()

        return data

    def getLoclaData(self, path):
        f = open(path,"r")
        data = json.loads(f.read())
        f.close()
        return data

    def getBasicData(self):
        url = f"https://www.tianqiapi.com/free/day?appid={self.appid}&appsecret={self.appsecret}&city={self.city}"
        print("获取基本天气")
        if self.DEBUG:
            data =  self.getLoclaData("saved_basic.json")
        else:
            data = self.getData(url)
        
        ################
        # 数据筛选 #

        return data
    
    def getAirData(self):
        url = f"https://v0.yiketianqi.com/api?version=v10&appid={self.appid}&appsecret={self.appsecret}&city={self.city}"
        print("获取空气质量")
        if self.DEBUG:
            data = self.getLoclaData("saved_air.json")
        else:
            data= self.getData(url)

        ################
        # 数据筛选 #

        return data
    
    def getLifeData(self):
        url = f"https://www.tianqiapi.com/life/lifepro?appid={self.appid}&appsecret={self.appsecret}&city={self.city}"
        print("获取生活指数")
        if self.DEBUG:
            data = self.getLoclaData("saved_life.json")
        else:
            data =self.getData(url)

        ################
        # 数据筛选 #

        return data
        
    def getProData(self):
        url = f"https://v0.yiketianqi.com/api?version=v62&appid={self.appid}&appsecret={self.appsecret}&city={self.city}" 
        print("获取专业天气")
        if self.DEBUG:
            result = self.getLoclaData("saved_pro.json")
        else:
            result = self.getData(url)
        
        forcast = [result["hours"][0]]
        forcast[0]["hours"] = result["update_time"].split(':')[0]
        forcast[0]["win"] = result["win"]+result["win_speed"]
        for i in range(1,len(result["hours"])):
            item = result["hours"][i]
            forcast.append({
                "hours":item["hours"].split(':')[0],
                "wea_img":item["wea_img"],
                "tem":item["tem"],
                "win":item["win"]+item["win_speed"],
                "aqi":item["aqi"]
            })
        
        air = {
            "value":[
                int(result['aqi']["air"]),
                int(result['aqi']["pm25"]),
                int(result['aqi']["pm10"]),
                int(result['aqi']["o3"]),
                int(result['aqi']["no2"]),
                int(result['aqi']["so2"]),
                result['aqi']["co"]
            ],
        "desc":[
                result['aqi']["air_level"],
                result['aqi']["pm25_desc"],
                result['aqi']["pm10_desc"],
                result['aqi']["o3_desc"],
                result['aqi']["no2_desc"],
                result['aqi']["so2_desc"],
                result['aqi']["co_desc"]
            ]
        }
        if air["value"][6] == '-':
            air["value"][6] = 0
            air["desc"][6] = "暂无数据"
        else:
            air["value"][6] = int(air["value"][6])
        

        data = {
            "now":[result["wea_img"],result["tem"],result["tem1"],result["tem2"]],
            "life-index":result["zhishu"],
            "humidity":result["humidity"],
            "air":air,
            "forcast":forcast
        }
        # f = open("saved.json", 'w')
        # f.write(json.dumps(data, indent=4, separators=(', ', ': ')))
        # f.close()
        return data

def getServerDate():
    num2week = {'0':"星期日",'1':"星期一",'2':"星期二",'3':"星期三",'4':"星期四",'5':"星期五",'6':"星期六"}
    str1 = time.strftime("%m{}%d{}")
    str2 = num2week[time.strftime("%w")]
    return str1.format("月","日 ")+str2+" 西安"

if __name__ == "__main__":

    # print(getServerDate())

    # data1 = IndoorData()
    # print(data1.getData())

    # data2 = OutdoorData(
    #     appid=account[0]["appid"],
    #     appsecret=account[0]["appsecret"],
    #     city="西安",
    #     DEBUG=True)
    # print(data2.getProData())

    print(getLocalData())


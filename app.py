from flask import Flask
from flask import render_template
from flask import jsonify
from gevent import pywsgi
from pymysql import DBAPISet
import utils
import time



app = Flask(__name__)

LOCALDATA = True

@app.route('/')
def helloWorld():
    return render_template("index.html")

@app.route('/date')
def getDate():
    return utils.getServerDate()

@app.route('/time')
def getTime():
    return time.strftime("%X")

@app.route('/indoor')
def getIndoorData():
    if LOCALDATA:
        data = utils.getLocalData()
    else:
        data = utils.IndoorData().getData()
    # print(type(data),data)
    return jsonify(data)

@app.route('/outdoor')
def getOutdorData():
    if LOCALDATA:
        data = utils.OutdoorData(DEBUG=True).getProData()
    else:
        data = utils.OutdoorData(DEBUG=False).getProData()
    # print(type(data),data)
    return jsonify(data)

if __name__ == '__main__':

    LOCALDATA = True ##从本地加载数据，不访问数据库或调用API

    # app.run(debug=True)
    server = pywsgi.WSGIServer(('0.0.0.0', 12345), app)
    server.serve_forever()


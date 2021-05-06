# -*- coding: utf-8 -*-
"""
@author: gunnar
"""
import requests, json
from flask import Flask, render_template, request
app = Flask(__name__)


def server_API_GET(url):
    response = requests.get(url)
    return response.json()['compliment']

@app.route('/',methods = ['POST', 'GET'])
def hello2():
    if request.method == 'POST':
        name = server_API_GET("http://complimentr.com/api")
    else:
        name=''
    return  render_template('my_pep.html', name=name)

#------------------------------------------------------
if __name__ == '__main__':
    app.run(debug = True)

from flask import Flask, render_template, request, redirect, jsonify # jsonify lets us send JSON back!
# Import MySQLConnector class from mysqlconnection.py
from mysqlconnection import MySQLConnector
app = Flask(__name__)
'''
Set variable 'mysql' to be an instance of the MySQLConnector class,
taking our entire application as the first argument and the database
name as the second argument.
'''
mysql = MySQLConnector(app, 'myownapi')
#  HTML-oriented index method
@app.route('/quotes')
def index():
    return render_template('index.html')
#  JSON-oriented index method
@app.route('/quotes/index_json')
def index_json():
    query = "SELECT * FROM quotes"
    print "doing the query"
    quotes = mysql.query_db(query)
    many = len(quotes)
    print "got this many ",many
    print jsonify(quotes).__dict__
    return jsonify(quotes=quotes)
#  Because creating html from json using javascript (as done above) is prone to errors, we can return an html response as well by creating a partial html that will be added to index.html
@app.route('/quotes/index_html')
def index_partial():
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return render_template('partials/quotes.html', quotes=quotes)
app.run(debug=True)

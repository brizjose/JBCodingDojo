# import flask
from flask import Flask, render_template
# import the connector function
from mysqlconnection import MySQLConnector
# create the flask app
app = Flask(__name__)
# connect and store the connection in 'mysql' variable, note we pass the database name to the function as an argument
mysql = MySQLConnector(app, 'world')
# we run a query with query_db() function and print to results in Terminal, we ask only for the first country on the list
#      print mysql.query_db("SELECT * FROM country")[0]
# we run a second query and ask for the name of that first country
#      print mysql.query_db("SELECT * FROM country")[0]['Name']
# we can create some flask to display country information in an html
@app.route('/countries')
def countries():
    countries = mysql.query_db("SELECT country.Name AS Country, city.Name AS Capital FROM country JOIN city ON country.Capital = city.ID;")
    return render_template("countries.html", all_countries=countries)

app.run(debug=True)
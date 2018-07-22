from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask (__name__)
mysql = MySQLConnector(app,'friends')

@app.route('/')
def get_friends():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends = friends)

@app.route('/add', methods=['POST'])
def add_friend():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
    mysql.query_db(query,data)
    return redirect('/')

app.run(debug=True)

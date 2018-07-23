from flask import Flask, render_template, request, redirect, session, Flask
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app, 'email_validations')

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/validate/<email>', methods=['POST'])
def validate(email):
    email = request.form['email']
    print email
    query = "SELECT * FROM emails WHERE email = :specified"
    data = {"specified":email}
    validation = mysql.query_db(query,data)
    print validation
    return redirect('/')
    
app.run(debug=True) 

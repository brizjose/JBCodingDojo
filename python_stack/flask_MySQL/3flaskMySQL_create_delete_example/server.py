# import flask
from flask import Flask, render_template, request, redirect
# import the connector function
from mysqlconnection import MySQLConnector
# create the flask app
app = Flask(__name__)
# connect and store the connection in 'mysql' variable, note we pass the database name to the function as an argument
mysql = MySQLConnector(app, 'users')

# create first flask to display all users in index.html
@app.route('/')
def users():
    users = mysql.query_db("SELECT * FROM users;")
    return render_template("index.html", all_users=users)

# create a route to a function that sends you to an update user html with a form:
@app.route('/users/update/<user_id>')
def update_request(user_id):
    query = "SELECT * FROM users WHERE users.id = :specific_id;"
    data = { 'specific_id': user_id }
    user = mysql.query_db(query,data)
    print user
    return render_template('update.html', user=user)

# once information is updated, submit will route to the function that updates the database:
@app.route('/users/user_update/<user_id>', methods=['POST'])
def update_user(user_id):
    new_email = request.form['email']
    new_password = request.form['pword']
    query = "UPDATE users SET users.email = :specified_email, users.password = :specified_password WHERE users.id = :user_id"
    data = {
            'specified_email':new_email,
            'specified_password':new_password,
            'user_id':user_id
            }
    mysql.query_db(query,data)
    return redirect('/')

# create a route to a function that asks if sure to delete user, we can create an html that asks if you're sure
@app.route('/users/delete/<user_id>')
def delete_request(user_id):
    query = "SELECT * FROM users WHERE users.id = :specific_id;"
    data = { 'specific_id': user_id }
    user = mysql.query_db(query,data)
    print user
    return render_template('confirm.html', user=user)

# create a route to a function that deletes the users...
@app.route('/users/delete_now/<user_id>')
def delete_user(user_id):
    query = "DELETE FROM users WHERE users.id = :specified_id"
    data = {
            'specified_id':user_id
            }
    mysql.query_db(query,data)
    return redirect('/')

# index.html already has a form to create a new user.  Create a route to a function that writes the query to achieve that...
@app.route('/users/new', methods=['POST'])
def create_user():
    first_name = request.form['fname']
    last_name = request.form['lname']
    email = request.form['email']
    password = request.form['pword']
    query = "INSERT INTO `users`.`users` (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW());"
    data = {
        'first_name':first_name,
        'last_name':last_name,
        'email':email,
        'password':password
    }
    mysql.query_db(query,data)
    return redirect('/')

app.run(debug=True)
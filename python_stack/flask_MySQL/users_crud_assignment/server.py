from flask import Flask, render_template, request, redirect, session, flash
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql"; note that you pass the database name to the function
mysql = MySQLConnector(app, 'users')
# an example of running a query
print mysql.query_db("SELECT * FROM users")
@app.route("/")
def index():
    users = mysql.query_db("SELECT * FROM users")
    return render_template('index.html', all_users = users)

@app.route("/create")
def create():
    return render_template("create.html")

@app.route("/add_users", methods=["POST"])
def add_users():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    password = request.form["password"]
    query = "INSERT INTO `users`.`users` (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (:field_one,:field_two,:field_three,:field_four, now(), now());"
    data = { 
        "field_one":first_name,
        "field_two":last_name,
        "field_three":email,
        "field_four":password
    }
    result = mysql.query_db(query,data)
    return redirect('/')

@app.route("/users/<user_id>")
def show(user_id):
    query = "SELECT * FROM users.users WHERE id = :specific_id"
    data = {
        "specific_id":user_id
    }
    users = mysql.query_db(query,data)
    return render_template("show.html", users=users[0])

@app.route("/users/edit/<user_id>")
def edit(user_id):
    query = "SELECT * FROM users.users WHERE id = :specific_id"
    data = {
        "specific_id":user_id
    }
    users = mysql.query_db(query,data)
    return render_template("edit.html", users=users[0])

@app.route("/update_users/<user_id>", methods=["POST"])
def udate(user_id):
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    password = request.form["password"]
    query = "UPDATE `users`.`users` SET `first_name`=:field_one, `last_name`=:field_two, `email`=:field_three, `password`=:field_four, `updated_at`=now() WHERE `id` = :specific_id"
    data = {
        "specific_id":user_id,
        "field_one":first_name,
        "field_two":last_name,
        "field_three":email,
        "field_four":password
    }
    users = mysql.query_db(query,data)
    return redirect("/users/{}".format(user_id))

@app.route('/users/delete/<user_id>')
def delete_request(user_id):
    query = "SELECT * FROM users WHERE users.id = :specific_id;"
    data = { 'specific_id': user_id }
    user = mysql.query_db(query,data)
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

app.run(debug=True)
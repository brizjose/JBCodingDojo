import md5

#when user is being created

@app.route('users/create', methods=['POST'])
def create_user():
    username = request.form['username']
    email = request.form['email']
    password = md5.new(request.form['password']).hexdigest()
    insert_query = "INSERT INTO users (username, email, password, created_at, updated_at) VALUES (:username, :email, :password, NOW(), NOW())"
    query_data = {'username':username, 'email':email, 'password':password}
    mysql.query_db(insert_query, query_data)

#when existing user is logging in

    email = request.form['email']
    password = md5.new(request.form['password']).hexdigest()
    user_query = "SELECT * FROM users WHERE users.email = :email AND users.password = :password"
    query_data = {'email':email, 'password':password}
    mysql.query_db(user_query, query_data)

    # do the necessary logic to login if the user exists, otherwise redirect to login page with error message<br>


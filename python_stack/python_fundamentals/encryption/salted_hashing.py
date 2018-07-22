import md5

# salt means adding some characters randomly and concatenating those with the password before run through md5

# first, import the module, then generate a salt randomly:

import os, binascii

salt = binascii.b2a_hex(os.urandom(15))

# The function called os.urandom() returns a string of bytes. The number of bytes is equal to the parameter provided. 
# This string isn't a normal alphanumeric string, so we turn it into a string using the function b2a_hex(), 
# which will turn the value into a normal alphanumeric string. This new random string will be our salt.

    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    salt =  binascii.b2a_hex(os.urandom(15))
    hashed_pw = md5.new(password + salt).hexdigest()
    insert_query = "INSERT INTO users (username, email, password, salt, created_at, updated_at)
        VALUES (:username, :email, :hashed_pw, :salt, NOW(), NOW())"
    query_data = { 'username': username, 'email': email, 'hashed_pw': hashed_pw, 'salt': salt}
    mysql.query_db(insert_query, query_data)

# when authenticating:

    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
    encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
    if user[0]['password'] == encrypted_password:
    # this means we have a successful login!
    else:
        # invalid password!
    else:
    # invalid email!

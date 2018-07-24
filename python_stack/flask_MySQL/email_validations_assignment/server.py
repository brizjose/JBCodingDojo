from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "emailvalid1234"
mysql = MySQLConnector(app, 'email_validation')

@app.route("/")
def index():
    if 'emails' not in session:
        session['emails'] = []
    return render_template('index.html')
 
@app.route('/validate', methods=['POST'])
def validate():
    email_check = request.form['email']
    query = "SELECT * FROM emails"
    data = {"specified":email_check}
    all_emails = mysql.query_db(query,data)
    #print all_emails
    counter = 0
    for email in all_emails:
        if email_check == email['email']:
            session['emails'].append(email)
            counter += 1
        else:
            continue
    if counter == 0:
        flash(u'Email not in our database, try again!', 'lead')
        return render_template("index.html")
    else:
        flash('Yep! {} is in our database'.format(email_check))
        query = "INSERT INTO `email_validation`.`matches` (`email`, `created_at`, `updated_at`) VALUES (:specified_email, NOW(), NOW());"
        data = {'specified_email':email_check}
        mysql.query_db(query,data)
        return redirect('/success')
        
@app.route('/success')
def success():
    query = "SELECT * FROM matches"
    matches = mysql.query_db(query)
    return render_template("success.html", email_matches=matches)

app.run(debug=True) 

from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('route/<username>/<id>')
def show_username_profile(username, id):
    print username
    print id
    return render_template("users.html")

#can pass as many variables as needed in the URL as long as they do so as parameters to the route handler function


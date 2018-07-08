from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def start_index():
    return render_template('indexa.html', username = "Dunno")
@app.route('/usersa/<username>')
def show_user_profile(username):
    print username
    return render_template('usersa.html')
app.run(debug=True)

#this passes data from the client to the server through the URL
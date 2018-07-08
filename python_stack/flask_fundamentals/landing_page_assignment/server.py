from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def got_to_index():
    return render_template('index.html')
@app.route('/ninjas')
def call_ninjas():
    return render_template('ninjas.html')
@app.route('/dojos')
def dojo_enroll():
    return render_template('dojos.html')
@app.route('/new', methods=['POST'])
def new_ninja():
    name=request.form['name']
    email=request.form['email']
    return render_template("success.html")
app.run(debug=True)

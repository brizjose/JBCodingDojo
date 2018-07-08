from flask import Flask, render_template, request, redirect
from flask_bootstrap import Bootstrap
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/result', methods=['POST'])
def show_posted():
    name=request.form['name']
    location=request.form['locations']
    language=request.form['languages']
    comment=request.form['comment']
    return render_template("result.html")
app.run(debug=True)
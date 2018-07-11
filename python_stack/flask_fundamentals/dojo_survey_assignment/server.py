from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = "validation"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def display():
    if len(request.form['name']) < 2:
        flash("Please enter your name")
    if len(request.form['comment']) > 120:
        flash("Please limit comment to 120 characters")
    if "_flashes" in session:
        return redirect("/")
    name = request.form['name']
    location = request.form['locations']
    language = request.form['languages']
    comment = request.form['comment']
    return render_template("result.html", name = name, location = location, language = language, comment = comment)

app.run(debug=True)

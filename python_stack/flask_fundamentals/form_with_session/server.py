from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = "ThisKeyIsSecret"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/users", methods=["POST"])
def create_user():
    print request.form
    session['name'] = request.form["name"]
    session['email'] = request.form["email"]
    return redirect('/success')
    # return render_template("success.html", name=name, email=email)

    #session allows for 'persistent data storage' that is written during the request / response cycle
    #this data is called 'state', it 'outlives' the process that generated it by getting it in writing in a dictionary
    #developers keep state data to help them solve problems down the line
    #cookies are packets of information stored in a small file in client's hard drive.  this information is hashed, encrypted

@app.route("/success")
def show_user():
    # return render_template("success.html", name=session['name'], email=session['email'])   

    # streamlined return command once we have applied session in our template....

    return render_template("success.html") 

app.run(debug=True)
from flask import Flask, render_template, session, redirect
app = Flask(__name__)
app.secret_key = "creepyninja"

@app.route('/')
def default():
    return render_template("default.html")
@app.route('/ninja')
def ninjas():
    # if "ninjas" not in session:
    #     session["ninjas"].append(
    #         {"name":"Leonardo", "color":"blue", "type":"turtle"},
    #         {"name":"Michelangelo", "color":"orange", "type":"turtle"},
    #         {"name":"Raphael", "color":"red", "type":"turtle"},
    #         {"name":"Donatello", "color":"purple", "type":"turtle"},
    #         {"name":"April", "color":"none", "type":"human"}
    #     )
    # print ninjas
    # return redirect('/')
    return render_template("ninja.html")

app.run(debug=True)
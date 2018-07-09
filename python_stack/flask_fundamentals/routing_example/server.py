from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def index():
    ninja_turtles = [
        "Leonardo", "Michelangelo", "Raphael", "Donatello"
    ]
    return render_template("index.html", name="Ninja Turtles", turtles=ninja_turtles)

@app.route("/dictionary")
def each():
    ninja_dict = [
        {"name":"Leonardo","color":"blue","type":"turtle"},
        {"name":"Michelangelo","color":"orange","type":"turtle"},
        {"name":"Raphael","color":"red","type":"turtle"},
        {"name":"Donatello","color":"purple","type":"turtle"},
        {"name":"April","color":"pink","type":"human"}
    ]
    return render_template("dictionary.html", turtles=ninja_dict)

@app.route("/action_turtle", methods=["POST"])
def action_turtle():
    print request.form
    # print request.form['name']
    # print request.form['value']
    # return "Hello {}".format(request.form['name'])

app.run(debug=True)
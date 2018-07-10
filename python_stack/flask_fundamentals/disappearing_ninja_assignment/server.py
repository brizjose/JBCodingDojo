from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def default():
    return render_template("default.html")

@app.route('/ninja', methods=['POST', 'GET'])
def ninjas():
    return render_template("ninja.html", image="tmnt.png")

@app.route("/boilerplate", methods=['POST'])
def boiler():
    color = request.form['color'].lower()
    print color
    return redirect("/ninja/"+color)

@app.route('/ninja/<color>')
def turtle(color):
    if color == "blue":
        return render_template("/blue.html")
    elif color == "orange":
        return render_template("/orange.html")
    elif color == "red":
        return render_template("/red.html")
    elif color == "purple":
        return render_template("/purple.html")
    else:
        return render_template("/notapril.html")

app.run(debug=True)
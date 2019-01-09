# import a flask class from the flask framework
# the class includes all the prototypes that are needed to write web apps with python
from flask import Flask

# create variable to store the flask object instance/flask application

# when script is run, python assigns the name "main" to the script

app = Flask(__name__)

@app.route('/')
def home():
    return "Website home page here!"

@app.route('/about')
def about():
    return "Website about goes here!"

# this is true when we execute the script:

if __name__ == "__main__":
    app.run(debug=True)


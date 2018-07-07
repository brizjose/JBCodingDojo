from flask import Flask, render_template    #adding render_template allows us to render the referenced html within templates folder
app = Flask(__name__)                           #create variable Flask(and wait for a name)
@app.route('/')                                 #this functions as the root route because only '/'
def root_route():                               #this is the function triggered at the root
    return render_template('index.html')
@app.route('/success')                          #@ decorator attaches the upcoming function to the '/success' path
def success():                                  #we define the function
    return render_template('success.html')      #this is what the function will do, will render the html in the templates folder
app.run(debug=True)                             #run app in debug mode


# recap:
# create a generic route:
# @app.route('/some_route')
# def some_function():
#   //some code

# and voila!  whenever someone calls for localhost:5000/some_route in the browser, the function will be called into action

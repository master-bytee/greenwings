from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/instagram')
def instagram():
    return render_template('instagram.html')

@app.route('/video')
def video():
    return render_template('video.html')

@app.route('/track')
def track():
    return render_template('track.html')

if __name__ == '__main__':
    app.run(debug=True)

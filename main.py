from flask import Flask, request, render_template, jsonify
import os
from joblib import load
from sklearn.feature_extraction.text import TfidfVectorizer
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
import nltk
from nltk.corpus import stopwords

app = Flask(__name__)

# Beranda
@app.route('/', methods=['GET'])
def hasil():
    return render_template('beranda.html') 

@app.route('/blok-iii', methods=['GET'])
def index():
    return render_template('blok-3.html') 

# Deskripsi
@app.route('/blok-iv', methods=['GET'])
def deskripsi():
    return render_template('blok-4.html')

@app.route('/blok-v', methods=['GET'])
def prediksi():
   return render_template('blok-5.html')

# Visualisasi
@app.route('/blok-vi', methods=['GET'])
def visualisasi():
    return render_template('blok-6.html')

# Anggota
@app.route('/blok-vii', methods=['GET'])
def anggota():
    return render_template('blok-7.html')


# if __name__ == '__main__':
#     app.run(port=3000, debug=True)
if __name__ == '__main__':
    app.run(debug=False, port=os.getenv("PORT", default=5000))

# if __name__ == '__main__':
#     app.run(host="0.0.0.0", port=5000, debug=true)

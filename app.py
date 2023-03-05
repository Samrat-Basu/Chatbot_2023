from flask import Flask, render_template, request, jsonify

from responses import sent_response

app = Flask(__name__)


@app.get("/")
def index_get():
    return render_template("base1.html")


@app.post("/predict")
def predict():
    text = request.get_json().get("message")
     # print(text)
    # TODO check if text is valid
    res = sent_response(text)
    # print(res)
    mes = {"answer": res}
    return jsonify(mes)


if __name__ == "__main__":
    app.run(debug=True)

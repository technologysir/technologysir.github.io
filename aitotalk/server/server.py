import openai
openai.api_key = "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"
from flask import Flask, request
from flask_cors import cross_origin
app = Flask(__name__)


@app.route("/ask")
@cross_origin()

def ask():

    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt=request.args['q'],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    
    message = completions.choices[0].text

    return {"answers":message}

if __name__ == "__main__":
    app.run(debug=True)
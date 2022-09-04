import json
from flask import Flask, jsonify, request
from blog_repo import BlogRepo


app = Flask(__name__)
blog_repo = BlogRepo('test_db.json')


@app.route("/blog/fetch-all")
def fetch_all():
    blog_type = request.args.get('blog-type')
    rsp = jsonify(blog_repo.find_all(blog_type))
    rsp.headers['Access-Control-Allow-Origin'] = '*'

    return rsp


@app.route("/blog/add", methods=['POST'])
def add_blog():
    blog_type = request.args.get('blog-type')
    blog_data = json.loads(request.data)
    blog_repo.insert(blog_type, blog_data)

    return {
        'status': 'OK'
    }


@app.route("/blog/delete")
def delete_blog_by_id():
    id = int(request.args.get('id'))
    blog_repo.delete_by_id(id)

    return {
        'status': 'OK'
    }

app.run(debug=True)

import json
from flask import Flask, jsonify, request
from blog_repo import BlogRepo
import os

app = Flask(__name__)
blog_repo = BlogRepo('blog_db.json')


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

@app.route("/blog/delete-all")
def delete_all():
    blog_repo.delete_all()

    return {
        'status': 'OK'
    }

@app.route("/blog/initialise")
def initialise():
    blog_repo.delete_all()

    files = []
    for (dirpath, dirnames, filenames) in os.walk('./jsons'):
        files.extend(filenames)
    files = [f for f in files if f[-5:] == '.json']
    rsp = []
    for f in files:
        with open('./jsons/' + f, encoding='utf-8') as fp:
            blog_type = f[:-5]
            blog_data = json.load(fp)

            blog_repo.insert(blog_type, blog_data)

            rsp.append({
                    'blog_type': blog_type,
                    'blog_data': blog_data
                })

    return rsp

app.run(debug=True)

from tinydb import TinyDB, Query


class BlogRepo:
    def __init__(self, db_name):
        self.db_name = db_name
        self.db = TinyDB(db_name)

    def insert(self, collection_name, data):
        data['collection'] = collection_name
        self.db.insert(data)
        del data['collection']

    def find_all(self, collection_name):
        CollectionQuery = Query()
        docs = self.db.search(CollectionQuery['collection'] == collection_name)
        for doc in docs:
            doc['id'] = doc.doc_id

        return docs

    def delete_by_id(self, id):
        self.db.remove(doc_ids=[id])


if __name__ == '__main__':
    blog_repo = BlogRepo('test_db.json')
    data = {
        "blog_name": 'hello',
        "blog_header": {
            "type": "text",
            "content": "This is a blog header",
            "color": "#ffffff",
            "font": "Bold"
        },
        "blog_content": [
            {
                "type": "text",
                "content": "This is a blog header",
                "color": "#ffffff",
                "font": "Bold"
            }
        ]
    }
    # blog_repo.insert('test', data)
    blog_repo.delete_by_id(5)
    print(blog_repo.find_all(('test')))

    
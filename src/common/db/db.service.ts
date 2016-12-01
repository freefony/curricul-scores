import PouchDB from 'pouchdb'

const generateID = (doc) => {
  return [doc.doctype, doc.name, new Date().getTime()].join('-')
}

export class DBService {
 
  db: any;
  remote: any;
 
  constructor() {
 
    this.db = new PouchDB('curricul');
 
    this.remote = 'http://localhost:5984/curricul';
 
    // this.db.sync(this.remote, options);
 
  }

  save(doc){
    doc._id = generateID(doc)
    return this.db.put(doc)
  }
 
  update(doc){
    this.db.get(doc)
    .then((upstreamDoc) => {
      doc._rev = upstreamDoc._rev
      return doc
    })
    .then((doc) => {
      return this.db.put(doc)
    })
  }
 
  delete(doc){
 
  }
 
  handleChange(change){
 
  }
 
}
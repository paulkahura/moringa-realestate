import firebase from "../firebase";

const db = firebase.ref("/Properties");

class PropertyDataService {
  getAll() {
    return db;
  }

  create(property) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new PropertyDataService();

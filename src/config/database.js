class UserDataBase {
  constructor() {
    this._data = new Map();
  }
  getUserData(name) {
    const data = this._data.get(name);
    if (typeof data == "undefined") return null;
    return data;
  }
  putUserData(name, information) {
    let user = {
      name: name,
      information: information,
    };
    this._data.set(name, user);
    console.log(this._data);
  }
}
const db = new UserDataBase();
module.exports = db;

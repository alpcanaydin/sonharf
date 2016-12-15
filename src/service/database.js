class Database {
  constructor() {
    this.data = require('../db/names.json');
    this.dataLength = this.data.length;
  }

  checkName(name) {
    return this.isExists(name);
  }

  isExists(name) {
    return this.data.indexOf(name) > -1;
  }

  peakRandom() {
    return this.data[Math.floor(Math.random() * this.dataLength)];
  }

  peakByName(name, spokenNames) {
    const lastLetter = name[name.length - 1];
    const regexp = new RegExp(`^${lastLetter}`, 'i');
    const availables = this.data.filter(item => regexp.test(item) && spokenNames.indexOf(item) === -1);

    return availables[Math.floor(Math.random() * (availables.length - 1))];
  }
}

const database = new Database();
export default database;

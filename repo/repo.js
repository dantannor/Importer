module.exports = class Repo {
  constructor() {
    this.treatData = new Map();
    this.demoData = new Map();
  }

  async update(hospitalName, data) {
    console.log('saving data');

    // should be parallel foreach/async
    data.treat.forEach((obj) => {
      const key = `hospitalName${obj.id}`;

      this.treatData.update(key, obj);
    });

    data.demo.forEach((obj) => {
      const key = `hospitalName${obj.id}`;

      this.demoData.update(key, obj);
    });

    // await finish both
  }
};

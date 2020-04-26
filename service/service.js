const Reader = require('./reader');
const Repo = require('../repo/repo');

module.exports = class Service {
  constructor() {
    const reader = new Reader();
    const repo = new Repo();
  }

  async update(hospitalName, demographics, treatment) {
    const schemas = await this.transformer.getSchemas(hospitalName);
    const rawData = await this.reader.read(schemas, demographics, treatment);
    const data = await this.transformer.transform(hospitalName, rawData);

    await this.repo.update(data);
  }
};

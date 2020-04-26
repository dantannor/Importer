/* eslint-disable class-methods-use-this */
const readXlsxFile = require('read-excel-file/node');

module.exports = class Reader {
  async read(schemas, demographics, treatment) {
    console.log('reading data');

    const { demoSchema } = schemas;
    const { treatSchema } = schemas;

    // hardcoded files here, should be sent via web request instead (temp solution)
    const demo = readXlsxFile('/Users/daniel/Downloads/Software Engineer/hospital_1_Patient.xlsx', { demoSchema })
      .then(({ rows, errors }) => {
        if (errors.length !== 0) {
          console.log(errors);

          throw new Error('failed to read file');
        }
        return rows;
      });

    const treat = readXlsxFile('/Users/daniel/Downloads/Software Engineer/hospital_1_Treatment.xlsx', { treatSchema })
      .then(({ rows, errors }) => {
        if (errors.length !== 0) {
          console.log(errors);

          throw new Error('failed to read file');
        }
        return rows;
      });

    return { demo, treat };
  }
};

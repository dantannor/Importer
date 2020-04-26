module.exports = class Transformer {
  // should be strategy pattern here instead
  static getSchemas(hospitalName) {
    switch (hospitalName) {
      case 'hospital1':
        return {
          demoSchema,
          treatSchema,
        };

      default:
        throw new Error('no such hospital');
    }
  }

  static async transform(hospitalName, data) {
    const res = { treat: [], demo: [] };
    switch (hospitalName) {
      case 'hospital1':
        console.log('saving data');

        // should be parallel foreach/async
        res.treat = data.treat.map((obj) => ({
          patientId: obj.PatientId,
          treatmentId: obj.TreatmentId,
          startDate: obj.StartDate,
        }));

        res.demo = data.demo.map((obj) => ({
          mrn: obj.MRN,
          firstName: obj.FirstName,
          lastName: obj.lastName,
        }));

        return res;
        // await finish both

      default:
        throw new Error('no such hospital');
    }
  }
};

const demoSchema = {
  DeathDate: {
    prop: 'date',
    type: Date,
    // Excel stores dates as integers.
    // E.g. '24/03/2018' === 43183.
    // Such dates are parsed to UTC+0 timezone with time 12:00 .
  },
  PatientId: {
    prop: 'numberOfStudents',
    type: Number,
    required: true,
  },
  FirstName: {
    prop: 'contact',
    required: true,
    type: String,
  },
};

const treatSchema = {
  DeathDate: {
    prop: 'date',
    type: Date,
    // Excel stores dates as integers.
    // E.g. '24/03/2018' === 43183.
    // Such dates are parsed to UTC+0 timezone with time 12:00 .
  },
  PatientId: {
    prop: 'numberOfStudents',
    type: Number,
    required: true,
  },
  FirstName: {
    prop: 'contact',
    required: true,
    type: String,
  },
};

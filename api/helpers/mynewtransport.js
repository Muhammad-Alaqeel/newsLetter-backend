const nodemailer = require('nodemailer');


module.exports = {


  friendlyName: 'Mynewtransport',


  description: 'Mynewtransport something.',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO



    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "2d101feb1afb3a",
        pass: "8ca25170c6fcb5"
      }
    });

    return transport;
  }


};


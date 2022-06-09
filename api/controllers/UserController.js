/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const nodemailer = require('nodemailer');

module.exports = {
  





    async sendNews(req,res){
        try {
            
            const users= await User.find();




            var transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "2d101feb1afb3a",
                  pass: "8ca25170c6fcb5"
                }
              });


            var i=0;  

            while(i<users.length){

                var mailOptions = {
                    from: '"Example Team" <from@example.com>',
                    to: users[i].email,
                    subject: 'this my test',
                    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
                    
                };

                transport.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    
            });

                i++;
            } 

            return res.ok("it has been sent");

        } catch (err) {
          return res.serverError(err)  
        }
    },

    async greeting(req,res){

        try {
           
            

            const user= await User.create(req.body)
            



            var transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "2d101feb1afb3a",
                  pass: "8ca25170c6fcb5"
                }
              });



              var mailOptions = {
                from: '"Example Team" <from@example.com>',
                to: req.body.email,
                subject: 'Welcom To Our NewsLetter',
                text: 'We hope you enjoy our service',
                
            };
            
            
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                
                     });

            return res.ok("greeting")


        } catch (err) {
            return res.serverError(err);
        }

    }
};


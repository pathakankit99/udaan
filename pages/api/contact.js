var nodemailer = require('nodemailer');

import nextConnect from 'next-connect';

const contact = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

contact.post(async(req, res) => {
        if(req.method === 'POST'){
            const {name, email, message, phone} = req.body;
            // console.log(req.body)
            var transporter = nodemailer.createTransport({
                host: "smtp.mailgun.org",
                port: 587,
                auth: {
                    user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
                    pass: process.env.NEXT_PUBLIC_MAIL_PASS
                }
              });
              
              var mailOptions = {
                from: 'admin@udaanproperty.com',
                to: ['ankitpathak143192@gmail.com','mbiswajit84@gmail.com'],
                subject: name+" has filled the contact us form",
                html: "Name: "+name+" <br/>Email: "+email+" <br/>Contact Number: "+phone+" <br/>Message: "+message,
              };
              
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                return res.status(400).send('Some problem occured. Try again later.');            
                } else {
                  
                console.log('Email sent: ' + info.response);
                    return res.status(200).json({ message: 'Your information has been submitted successfully' });
                }
            });

            
        }
        else{
            res.status(422).send('Non supported request method');
        }
});

export default contact;
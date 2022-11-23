const sendEmail = require('./sendEmail');

const emailList = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'];

const emailWithDomain = {};

for(email in emailList){
    var domain = emailList[email].split("@");
    if(emailWithDomain.hasOwnProperty(domain[1])){
        emailWithDomain[domain[1]] = [...emailWithDomain[domain[1]], emailList[email]];
    }else{
        emailWithDomain[domain[1]] = [emailList[email]];
    }
}

for(const key in emailWithDomain){
    emailWithDomain[key].sort();

     // message for email
     const message = `
        <h1>Message</h1>
    `;

    // sending email
    try{
        sendEmail({
            to : emailWithDomain[key][0],
            subject : "Random message to different emails",
            text : message
        });

        console.log("MESSAGE SENT!!");
     }catch(error){
        console.log(error);
     }
}
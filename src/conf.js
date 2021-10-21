
//Homework config 

exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true, 
   specs: ['login.js','orders.js','items.js','products.js'], //Name of the Specfile 
   capabilities: {
    'browserName': 'chrome'
  },
  

  
};
     
 


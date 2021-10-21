
describe('Web Orders Login', function()  {
	it('Should navigate to Login Page',function()  {
            //browser.ignoreSynchronization = true;
            browser.driver.get('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    browser.driver.findElement(by.id('ctl00_MainContent_username')).sendKeys('Tester');
    browser.driver.findElement(by.id('ctl00_MainContent_password')).sendKeys('test');
    browser.driver.findElement(by.id('ctl00_MainContent_login_button')).click();
          console.log("login successfull");
          browser.driver.getTitle().then(function(pageTitle)
           {
               expect(pageTitle).toEqual('Web Orders');
           });

    
        	});
    
    });
describe('User login Demo', () => {
    it('Navigates to login page', () => {
        browser.get('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
        browser.getCurrentUrl().then((url) => {
        expect(url).toBe('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
    });

    it('Able to accept the user login credentials and login', () => {
        element (by.id ('ctl00_MainContent_username')).sendkeys ('Tester');
        element (by.id ('ctl00_MainContent_password')).sendkeys ('test');
        element (by.name ('ctl00$MainContent$login_button')).click();
        expect(url).toBe('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx');
     });


    it('Able to view all order page and check title', () => {
        element (by.linkText ('View all orders')).click();
        expect(title).toBe('List of All Orders');
    }); 

    it('Able to view all product page and check title', () => {
        element (by.linkText ('View all products')).click();
        expect(title).toBe('List of Products');
    }); 

    it('Able to orders page and check title', () => {
        element (by.linkText ('Order')).click();
        expect(title).toBe('Order');
    });
});
});
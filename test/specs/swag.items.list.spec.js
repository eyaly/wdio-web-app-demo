
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Swag items list', () => {
    
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsShown();
    });
    
    it('should validate that all products are present', () => {
        // Actual test starts here
        expect(SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    }); 

    it('should be able to see details of the products', () => {
        var numOfProduct = SwagOverviewPage.getAmount();
        // select random product
        var aProductIndex = Math.floor(Math.random() * numOfProduct);
        // get the title of the product
        var productName = SwagOverviewPage.getSwagTitle(aProductIndex);
        // click on the title (open details product page) 
        SwagOverviewPage.selectSwagItem(aProductIndex);
        SwagDetailsPage.waitForIsShown();
        // Assertions 
        // (1) check we are in the details page
        expect(SwagDetailsPage.waitForIsShown()).toEqual(
            true,
            'Swag Details page was not shown',
        );
        // (2) check the title
        var swagTitle = SwagDetailsPage.getTitle();
        expect(swagTitle).toEqual(
            productName,
            'Swag Details title is not the same as in the products page',
        );
        
    });

});

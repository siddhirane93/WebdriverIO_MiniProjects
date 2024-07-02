import { browser } from '@wdio/globals'
import webURL from '../testData/websiteUrlData.json'


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public openFlipkart () {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)   -> ${<variable name>} could be used when the URL has a variable element like dev/sit/uat etc
        return browser.url(webURL.openFlipkart);
    }

    public openProfile(){
          return browser.url(webURL.openProfile);
    }
    
    public openYoutube(){
        return browser.url(webURL.openYoutube);
    }
    
}
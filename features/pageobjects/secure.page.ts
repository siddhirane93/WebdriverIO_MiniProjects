import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('//div[contains(text(),"You\'ve changed \'11 Rules For Life: Secrets To Level Up\' QUANTITY to \'5\'")]');
        
    }
}

export default new SecurePage();
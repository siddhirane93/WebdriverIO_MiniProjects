import { $ } from '@wdio/globals'
import Page from './page';
import productData from '../testData/productNameData.json'
import securePage from './secure.page';

class AddProducts extends Page{
    
    public openFlipkart(){
        return super.openFlipkart();
    }

    public get searchProduct(){
        return $('/html/body/div/div/div/div/div/div/div/div/div/div/div/div/div/header/div/div[2]/form/div/div/input');
    }

    public get selectProduct() {
        return $('//a[@class="wjcEIp" and @title="11 Rules For Life: Secrets To Level Up"]');
    }

    public get addToCart(){
        return $('button[class="QqFHMw vslbG+ In9uk2"]');
    }

    public get increaseCount(){
        return $('//button[@class="LcLcvv" and contains(.,"+")]');
    }

    public get removeProducts(){
        
        return $('//div[contains(text(),"Remove")]');
    }

    public get confirmRemove(){
        return $('div[class="sBxzFz fF30ZI A0MXnh"]');
    }

    public async addFirst(){
        await browser.pause(2000);
        await this.searchProduct.setValue(productData.productName);
        await browser.pause(2000);
        await browser.keys('Enter');
        await browser.pause(5000);
        await this.selectProduct.click();
        await browser.pause(2000);
        const handles = await browser.getWindowHandles() // gets the window handles of all currently open pages
        await browser.switchToWindow(handles[1]); // this shifts focus to the tab number you want to work on going forward
        await this.addToCart.click();
        await browser.pause(3000);
    }

    public async addMoreProducts(){
        console.log('inside addMoreProducts');
        await browser.pause(1000);
        for (var i:number = 1;i<=4;i++){
            await browser.pause(1000);
            await this.increaseCount.scrollIntoView({ block: 'center', inline: 'center' });
            await this.increaseCount.click();
        }
        await browser.pause(2000);
        let printMessage = securePage.flashAlert;
        console.log('before');
        console.log('sideeeee' + await printMessage.getText());
        console.log('after');
        await browser.pause(2000);


    }
    public async removeAllProducts(){
        await browser.pause(2000);
        await this.removeProducts.scrollIntoView({ block: 'center', inline: 'center' });
        await this.removeProducts.click();
        await browser.pause(2000);
       // await this.confirmRemove.scrollIntoView({ block: 'center', inline: 'center' });
        await this.confirmRemove.click();
        
    }




}
export default new AddProducts();

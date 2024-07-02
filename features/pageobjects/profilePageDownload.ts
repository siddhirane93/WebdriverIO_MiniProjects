import { $ } from '@wdio/globals'
import Page from './page';

class Profile extends Page {
public get downloadResume (){
    return $('//button[contains(text()," Resume")]');
}
public get scrollDownPage (){
    return $('//h2[contains(text(),"WORK EXPERIENCE")]');
}

public get clickExperience (){
    return $('//*[@id="experience"]/div/div/div[1]/div/div[1]/button[3]');
}

public async techProfile(){
    await browser.pause(1000);
    const elem1 = await this.scrollDownPage;
    //await elem1.scrollIntoView();
    await elem1.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(2000);
    await this.clickExperience.click();
    await browser.pause(2000);
    const elem2 = await this.downloadResume;
    //await elem2.scrollIntoView();
    await elem2.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(2000);
    await this.downloadResume.waitForClickable();
    await this.downloadResume.click();
    await browser.pause(2000);
}
public openProfile () {
    return super.openProfile();
}

}
export default new Profile();
import { LightningElement } from 'lwc';
import img1 from '@salesforce/resourceUrl/Salesforce_Developer_Logo';
import img2  from '@salesforce/resourceUrl/LWC_Logo';
import img3 from '@salesforce/resourceUrl/SFDC';

export default class LWCTabs extends LightningElement {
 
    Salesforce_Developer_Logo=img1;
    LWC_Logo=img2;
    SFDC_logo=img3;
    showTabTwo = true;

}
import { LightningElement } from 'lwc';

import img1 from '@salesforce/contentAssetUrl/Salesforce_Developer_Logo';
import img2 from '@salesforce/contentAssetUrl/LWC_Logo';
import img3 from '@salesforce/contentAssetUrl/SFDC';

export default class AssetFile extends LightningElement {
    Salesforce_Developer_Logo = img1;
    LWC_Logo = img2;
    SFDC_logo = img3;
}

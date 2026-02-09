import { LightningElement } from 'lwc';
import img1 from '@salesforce/resourceUrl/FLM1';  
import img2 from '@salesforce/resourceUrl/FLM2'; 
import SalesforceLogo from '@salesforce/resourceUrl/SFDC'; 

export default class CondistionalRendering extends LightningElement 
{ 
     isVisible = false;
      FLMImage1;
    FLMLogo;
    SFDCLogo;
     showImages() {
        this.isVisible = true;
        this.FLMImage1 = img1;
        this.FLMLogo = img2;
        this.SFDCLogo = SalesforceLogo;
    }
    hideImages() {
        this.isVisible = false;
        this.FLMImage1 = '';
        this.FLMLogo = '';
        this.SFDCLogo = '';
    }
     }
    
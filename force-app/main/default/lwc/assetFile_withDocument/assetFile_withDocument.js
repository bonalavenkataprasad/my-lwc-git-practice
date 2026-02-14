import { LightningElement } from 'lwc';
import documentUrl from '@salesforce/contentAssetUrl/Git_Commands';

export default class AssetFile_withDocument extends LightningElement {
    openDocument() {
        window.open(documentUrl, '_blank');
    }

    downloadDocument() {
        window.location.href = documentUrl;
    }
    
}
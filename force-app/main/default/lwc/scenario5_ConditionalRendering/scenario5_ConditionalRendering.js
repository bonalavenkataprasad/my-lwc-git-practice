import { LightningElement } from 'lwc';

export default class Scenario5_ConditionalRendering extends LightningElement {

    fullPhone = '+91 1234567890';
    showFullPhone = false;

    togglePhone() {
        this.showFullPhone = !this.showFullPhone;
    }

    get displayPhone() {
        if (this.showFullPhone) {
            return this.fullPhone;
        }
        return '******' + this.fullPhone.slice(-4);
    }

    get buttonLabel() {
        return this.showFullPhone ? 'Hide Phone Number' : 'Show Phone Number';
    }
}
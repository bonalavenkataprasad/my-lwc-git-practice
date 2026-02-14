import { LightningElement } from 'lwc';

export default class Scenario7_iterationEmptyState extends LightningElement {
     contacts = []; // Empty array to simulate no records

    get hasContacts() {
        return this.contacts.length > 0;
    }
}
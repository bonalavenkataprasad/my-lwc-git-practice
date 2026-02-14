import { LightningElement } from 'lwc';

export default class Scenario8_iterationAndConditional extends LightningElement {

    contacts = [
        {
            id: 1,
            name: 'Ravi Kumar',
            email: 'ravi@example.com',
            phone: '+91 1626363778',
            isVip: true
        },
        {
            id: 2,
            name: 'Anita Sharma',
            email: 'anita@example.com',
            phone: '+91 4134435554',
            isVip: false
        },
        {
            id: 3,
            name: 'Priya Patel',
            email: 'priya@example.com',
            phone: '+91 1456234678',
            isVip: true
        },
        {
            id: 4,
            name: 'Rajesh Gupta',
            email: 'rajesh@example.com',
            phone: '+91 1234567890',
            isVip: false
        }

    ];

    get hasContacts() {
        return this.contacts.length > 0;
    }

    get contactClass() {
        return 'slds-box slds-m-bottom_small';
    }
}
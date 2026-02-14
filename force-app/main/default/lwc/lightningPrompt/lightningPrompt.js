import { LightningElement } from 'lwc';
import LightningPrompts from 'lightning/prompt';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LightningPrompt extends LightningElement {
    async handlePrompt() {
        const result = await LightningPrompts.open({
            message: 'Please enter your name',
            label: 'User Input',
            defaultValue: ''
        });

        if (result) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: `Hello, ${result}!`,
                    variant: 'success'
                })
            );
        }
    }
    
}
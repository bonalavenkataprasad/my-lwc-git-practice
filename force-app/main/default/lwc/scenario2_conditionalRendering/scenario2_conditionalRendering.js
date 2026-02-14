import { LightningElement } from 'lwc';

export default class Scenario2_conditionalRendering extends LightningElement {
     isAdmin = false;

     makeAdmin(){
        this.isAdmin =true;
     }
     makeNonAdmin(){
        this.isAdmin = false;
     }
}
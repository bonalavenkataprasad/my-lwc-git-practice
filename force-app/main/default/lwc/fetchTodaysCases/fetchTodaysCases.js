import { LightningElement ,wire} from 'lwc';
import todayCaseList from '@salesforce/apex/TodaysCases.getCases';

export default class FetchTodaysCases extends LightningElement {
    @wire(todayCaseList) cases;
}
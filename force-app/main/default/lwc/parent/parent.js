import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    
    eventName1;
    
    handleButtonClick1(){
        this.eventName1 = 'Child Button 1 is Clicked';
    }
}
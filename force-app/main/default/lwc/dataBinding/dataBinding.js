import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    myName = 'William';
    age = 20; 


    dynamicBinding='Test';

    // this is the property and it goes before the handle Input below...
    country;

    clickedButtonLabel;

    





    handleInput(event){
        //event HOLDS the data that comes from input element
        //event.detail.value equals the user input value or
        //event.target.value equals the user input value - this is the one we are using in class
    
        //This. is used to access the js properties
        //WE assign the user input value to dynamicBinding 
        this.dynamicBinding = event.target.value
    }
    // assign user input to country property

    handleInputChange(event){
        this.country=event.target.value;
    }
    handleClick(event){
        this.clickedButtonLabel = event.target.label;
    }
    
}
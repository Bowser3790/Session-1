import TickerSymbol from '@salesforce/schema/Account.TickerSymbol';
import { LightningElement } from 'lwc';

export default class SetterMethod extends LightningElement {
    name='dog'
    age=2
    //newAge=0;

    updateAge(event){
        this.newAge = event.target.value;
    }
    updateOriginalAge(){
        //When click on button, then original age will be updated
        this.age = this.newAge;
    }
    get age1(){
        //getter is used to read the data without changing the origional value
        //Type of age is string because the value is coming from input. By default, the input results are string. 
        // +1 or + 2 is showing that brother is 1 or 2 years older.
        return parseInt(this.age) + 1;
    }
    set age1(value){
         //setter is used to update the values
        //or assign a new value
        
        if(value<0){
            alert('Please enter a valid age. Age cannot be less than 0');
            console.log('Invalid age in setter age1');
        }else{
            this.age=value;
        }
    }
       
    }
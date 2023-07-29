import { LightningElement } from 'lwc';

export default class GetterMethod extends LightningElement {
    
    enteredNumber;
    nameList = ['','John', 'Sam', 'Tim', 'Nancy', 'Katy']

    handleNameIndex(event){
    this.enteredNumber = event.target.value;
    }
    get nameAtThatIndex(){
        if(this.entnernedNumber<0 || this.enteredNumber>=this.nameList.length){
            alert('Enter a valid Number')
        }else{return this.nameList[this.enteredNumber];
        
    }
}
}
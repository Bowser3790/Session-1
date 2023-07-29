import { LightningElement } from 'lwc';
export default class SetterChild1 extends LightningElement {
    calculatedAge=10;
    get customerAge(){
        return this.calculatedAge;
    }
    set customerAge(value){
        // calculationg age times 2
        this.calculatedAge = value*2;
    }
}
Collapse



white_check_mark
eyes
raised_hands













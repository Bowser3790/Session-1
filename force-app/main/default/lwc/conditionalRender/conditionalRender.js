import { LightningElement } from 'lwc';

export default class ConditionalRender extends LightningElement {
    flag=false;
    flag1=false;

    display=false
    //event.target.checked returns TRUE if checkbox is checked
    //event.target.checked returns FALSE if checkbox is not checked
    handleChange(event){
        this.display=event.target.checked
    }
}
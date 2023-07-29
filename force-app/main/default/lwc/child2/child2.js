import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {

    inputValue2;
    handleChange2(event){
        this.inputValue2 = event.detail.value;
    }
    handleClick2(){
        this.dispatchEvent(new CustomEvent('clicked2', detail : this.inputValue2))
    

    }
}
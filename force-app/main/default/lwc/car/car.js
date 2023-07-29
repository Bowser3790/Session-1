import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    engineType;
    handleEngineChange(event){
        this.engineType = event.target.value
    }
}
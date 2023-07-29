import { LightningElement, api } from 'lwc';

export default class CarEngine extends LightningElement {
    
    
    @api
    engineModel = 'V8';
    
    @api
    engineYear;

}
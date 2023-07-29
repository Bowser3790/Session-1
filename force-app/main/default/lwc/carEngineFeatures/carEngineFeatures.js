import { api, LightningElement } from 'lwc';

export default class CarEngineFeatures extends LightningElement {
    @api
    vPower='550 hp';

    @api
    fuelType;

    
    engineType;
    handleEngineChange(event){
        this.engineType = event.target.value
    }

    @api
    maxSpeed='120';
}
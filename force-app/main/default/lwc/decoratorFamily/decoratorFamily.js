import { LightningElement,track } from 'lwc';

export default class DecoratorFamily extends LightningElement {
    @track
    familyMembers=[
        {
            fName:'Sam',
            id:0


        },
        {
            fName: 'Nancy',
            id: 1
        }
        ]

        newId=2;
        handleFamilyMember(event){
            const newName = event.target.value

            const newFamilyMember = {
                fName:newName,
                id:this.newId
            }
            this.familyMembers.push(newFamilyMember);
            this.newId++;

        }
        
    }
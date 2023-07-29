import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    num1=10;
    num2=20;
    
    num3=15;
    num4=25;
    
    friendList = ['Ahmet', 'Cynthia', 'Bob'];

    buzzWord;
    
    // creating getters to read the sum of the numbers
    get sumOfNumbers(){
        return this.num1+this.num2;
    }

    //create getter to get the first name in friendList
    get myBestFriend(){
        return this.friendList[1].toUpperCase;
    }
    // the responsibility is assigning user input to the num3 property
    handleNum1(event){
        this.num3 = event.target.value;
        
    }
    // handle the 2nd field
    // assign user input to the num4 property
    handleNum2(event){
        this.num4 = event.target.value;
    }
    //using getter to calculate the sum of the 2 numbers
    get sumOfNums(){
        // return this.num3+this.num4; (this does not add values this concatinates... )
        return parseInt(this.num3) + parseInt(this.num4);
    }
    get diffOfNums(){
        return parseInt(this.num3) - parseInt(this.num4);
    }
    get multipleOfNums(){
        return parseInt(this.num3) * parseInt(this.num4);
    }
    get divisionOfNums(){
        return (this.num3) / parseInt(this.num4);

    }
    handleBuzzWord(event){
        this.buzzWord = event.target.value;

    }
    get buzzBuzz(){
        if(this.buzzWord=='password1'){
            return 'You guessed the buzz word!'

        }
        return null;
    }
    

}
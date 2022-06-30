import { LightningElement } from 'lwc';

export default class ConditionRendrening extends LightningElement {

    showText={
        
        result:false
    };

    toggaleText=false

    InnerTexts='OFF'
// update value using spread operator
   handleChange=()=>{
        this.showText={...this.showText,"result":true}
    } 
// toggale button
    handleToggale=()=>{
        this.toggaleText=!this.toggaleText
    }

    get status(){
        return this.InnerTexts
    }

    hadleStatus=(event)=>{
      this.InnerTexts=event.currentTarget.innerText
    }
// Event handle

showtext=null;

get checkText(){
    return this.showtext==='showtext'
}

handleInput=(event)=>{
    this.showtext=event.target.value
}

}
import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './singnUpTemplate.html'
import defaultTemplate from './renderMultipleTemplate.html'


export default class RenderMultipleTemplate extends LightningElement {

    selected=null

render(){

   return this.selected ==='Sign Up'? signUpTemplate :
    this.selected ==='Sign In'? signInTemplate :
    defaultTemplate
}

handleClick=(event)=>{
 this.selected =event.target.label

}
submitHandler(){

    this.selected ==='Sign Up'?
    console.log('Sign Up successfully'):
    this.selected ==='Sign In'?
    console.log('Sign Up successfully'):
    null

}

}
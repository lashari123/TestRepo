import { api, LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

 @api fullname
 @api friends

 @api userDetails

title='this is Salesforce developer'

changeHandler=(e)=>{
    this.title=e.target.value
}

}
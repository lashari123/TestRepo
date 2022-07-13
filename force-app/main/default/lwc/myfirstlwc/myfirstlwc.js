import { LightningElement } from 'lwc';

export default class Myfirstlwc extends LightningElement {


        testingcall = "hello"
       
        connectedCallback()
        {
            var name = "testign alert window";
            if(this.testingcall) {
            window.alert(name+"test");
             }
        }
    }
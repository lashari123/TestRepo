import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import findContactByAccountId from '@salesforce/apex/ContactController.findContactByAccountId';
import { createRecord } from 'lightning/uiRecordApi';
export default class UpdateAccount extends LightningElement {

    @api recordId;
    @api objectApiName;
   arrayFields = ['Details__c', 'Reason__c', 'Order_ID__c', 'Total_Amount_of_Discount__c'];

   columns =  [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName'},
    { label: 'Email', fieldName: 'Email', type: 'email' },    
];

@wire(findContactByAccountId,{acctId:'$recordId'}) contacts;

    handleSuccess(e) {
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent (
            new ShowToastEvent({
                title: 'Success',
                message: 'Account record updated!',
                variant: 'success'
            })
        );
    }
}
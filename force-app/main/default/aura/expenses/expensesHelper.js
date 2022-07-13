({
   /* createExpense: function(component, expense) {
        let theExpenses = component.get("v.expenses");
        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newExpense = JSON.parse(JSON.stringify(expense));
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
        
        


    }*/
    
    
    
        createExpense: function(component, expense) {
            
            
        let action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
            
        });
            
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
        $A.enqueueAction(action);
    },
    
        updateExpense: function(component, expense) {
        let action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                // do nothing!
            }
        });
        $A.enqueueAction(action);
    },
})
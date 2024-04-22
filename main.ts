#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;//dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin code here",
            type: "number"

        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "select an option",
                type: "list",
                choices: ["withdraw","check cash"]
            }
        ]
    );
    if (operationAns.operation === "withdraw") 
        {
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "please write your desire amount",
                        type: "number",
                        

                    }
                ]
            );
            if (amountAns.amount < myBalance) {

            
            myBalance -= amountAns.amount;

            console.log("your remaining balance is:" + myBalance)};

              if  (amountAns.amount > myBalance) {
                console.log("sorry ! your balance is not sufficient")

            }

            
        
            

    } else if (operationAns.operation === "check cash")
        {
            console.log("your current balance:" + myBalance)
        
    }
    
    } 

    

     
    
    

    
        

    
    

else {
    console.log("incorrect pin code!")
}
    
    

    
    
    





    

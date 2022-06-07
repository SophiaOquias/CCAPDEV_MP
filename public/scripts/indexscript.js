$(document).ready(function() {

    function numberWithCommas(number) {
        // regex formula from
        // https://www.delftstack.com/howto/javascript/javascript-add-commas-to-number/
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    function createExpenseDiv(expense, parentDiv) {
        // Guide Format 
        // <div id="entry1" class="entry" onclick="location.href='viewentry.html';">
        //     <span class="description">Thomas The Train Trainset</span>
        //     <span class="entryType">Expense</span>
        //     <br>
        //     <span class="amount">P1,760.00</span>
        //     <span class="date">January 03, 2022</span>
        // </div>

        // create html elements
        var expenseEntry = document.createElement("div");
        var descriptionRow = document.createElement("span");
        var entryTypeRow = document.createElement("span");
        var amountRow = document.createElement("span");
        var dateRow = document.createElement("span");
        var br = document.createElement("br");

        // add css styles 
        $(expenseEntry).addClass("entry");
        $(descriptionRow).addClass("description");
        $(entryTypeRow).addClass("entryType");
        $(amountRow).addClass("amount");
        $(dateRow).addClass("date");

        // add data 
        $(descriptionRow).text(expense.description);
        $(entryTypeRow).text(expense.entryType);
        $(amountRow).text(expense.amount);
        $(dateRow).text(expense.date);

        // append to parent div 
        expenseEntry.append(descriptionRow);
        expenseEntry.append(entryTypeRow);
        expenseEntry.append(br);
        expenseEntry.append(amountRow);
        expenseEntry.append(dateRow);

        parentDiv.append(expenseEntry);
    }

    $.get('get-expenses', function(data, status) {
        console.log(data);

        var expenseContainer = $("#bottomsection");

        var sum = 0;

        data.forEach((item, i) => {
            createExpenseDiv(item, expenseContainer);

            sum += item.amount;
        });

        // to .toFixed(2) adds decimal 
        $("#totalExpenses").text("P" + numberWithCommas(sum.toFixed(2)));
    });
})

// TO DO: make this jquery later
function editBalance() {
    var editButton = document.getElementById("editbalance");
    var amount = document.getElementById("balamount");

    if(editButton.innerHTML == "edit"){
        amount.innerHTML = "<input id='newbalance' type='number'>";
        editButton.innerHTML = "done";
    }
    else {
        var newBalance = document.getElementById("newbalance").value;
        amount.innerHTML = "P" + newBalance;
        editButton.innerHTML = "edit";
    }
}

function editBudget() {
    var editButton = document.getElementById("editbudget");
    var amount = document.getElementById("budgetamount");

    if(editButton.innerHTML == "edit"){
        amount.innerHTML = "<input id='newbudget' type='number'>";
        editButton.innerHTML = "done";
    }
    else {
        var newBudget = document.getElementById("newbudget").value;
        amount.innerHTML = "P" + newBudget;
        editButton.innerHTML = "edit";
    }
}

function editSavingsGoal() {
    var editButton = document.getElementById("editsavgoal");
    var amount = document.getElementById("sgoalamount");

    if(editButton.innerHTML == "edit"){
        amount.innerHTML = "<input id='newsavgoal' type='number'>";
        editButton.innerHTML = "done";
    }
    else {
        var newSavGoal = document.getElementById("newsavgoal").value;
        amount.innerHTML = "P" + newSavGoal;
        editButton.innerHTML = "edit";
    }
}
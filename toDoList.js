let toDo = [];


let input = prompt("What would you like to do?");

while (input !== 'quit') {

    if (input === "new") {
        let activity = prompt("What new activity would you like to do?");
        toDo.push(activity);
        console.log(`${activity} has been added to the list`);

    }
    if (input === "list") {
        console.log("******");
        for (let j = 0; j < toDo.length; j++) {
            console.log(`${j}: ${toDo[j]}`);
        }
        console.log("******");
    }
    if (input === "delete") {
        let del = prompt("Which index would you like to delete?");
        parseInt(del);
        toDo.splice(del, 1);
        console.log("Deleted!");
    }
    input = prompt("What would you like to do?");
}

console.log("You have quit the app!");


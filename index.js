const [arg1,arg2,operation,...arguments] = process.argv;

const addition = function (arguments) {
    const add = arguments.reduce( (acc,curr) => acc + parseInt(curr),0);
    console.log(add);
}

const subtraction = function (arguments) {
    if(arguments.length === 2) {
        const sub = arguments[0] - arguments[1];
        console.log(sub);
    } else {
        const err = new Error("Invalid number of arguments");
        console.log(err.name + ": " + err.message);
    }
}

const multiply = function (arguments) {
    const mul = arguments.reduce( (acc,curr) => acc * parseInt(curr),1);
    console.log(mul);
}

const division = function (arguments) {
    if(arguments.length === 2) {
        const div = arguments[0] / arguments[1];
        console.log(div);
    } else {
        const err = new Error("Invalid number of arguments");
        console.log(err.name + ": " + err.message);
    }
}

const calculation = function (operation, arguments) {
    switch (operation) {
        case '+' :
            addition(arguments);
            break;
        case '-' :
            subtraction(arguments);
            break;
        case '*' :
            multiply(arguments);
            break;
        case ' /' : 
            division(arguments);
            break;
        default :
            const err = new Error("unsupported operation");
            console.log(err.name + ": " + err.message);
    }
}

calculation(operation,arguments);
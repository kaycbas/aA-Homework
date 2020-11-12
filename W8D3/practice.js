console.log('hello world')

// named function
function test() {
    if (true) {
        console.log(num);
        var num = 2;
    }
    console.log(num);
    return true;
}

// anonymous functions / function expression
// ES5
const feedMe = function(food) {
    return `thanks for the ${food}`
}
// ES6
const feedMe = food => (`thanks for the ${food}`)

function User(username, password) {
    this.username = username;
    this.password = password;
    this.greet = () => { return "Howdy" } // should actually be defined on prototype
}

// correct way to do instance methods
User.prototype.greet = () => {
    return 'Howdy';
}

// monkey patching
Array.prototype.myEach = () => {

}


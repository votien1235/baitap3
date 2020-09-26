
class Test {
    id;
    name;
    time;
    numberQuestion;
    date;
    constructor(id, name, time, numberQuestion, date) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.numberQuestion = numberQuestion;
        this.date = date;
    }

}

class editTest {
    tests = new Array();
    constructor(tests) {
        this.tests = tests;
    }

    addTests() {
        let id = prompt("id test :");
        let name = prompt("name test :");
        let time = prompt("time test :");
        let day = prompt("date test : ");
        let numberQuestion = prompt("number Question : ");
        let test = new Test(id, name, time, day, numberQuestion);
        this.tests.push(test);
    }

    showAllTest() {
        for (let i = 0; i < this.tests.length; i++) {
            console.log(this.tests[i]);
        }
    }
}




export { Test, editTest };
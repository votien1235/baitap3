import { Test, editTest } from "./Test.js";
import { Question, editQuestion } from "./Question.js"

let arr1 = new Array();
let arr2 = new Array();
let Ques1 = new editQuestion(arr1);
let Test1 = new editTest(arr2);

while (true) {
    let input = Number(prompt(`
    Nhập NT để thêm bài test 
    Nhập AT để xem các bài test 
    Nhập NQ để thêm câu hỏi 
    Nhập AQ để xem các câu hỏi 
    Nhập DQ để xóa câu hỏi
    Nhập EQ để thay đổi câu hỏi `));
    if (input == 'NT') {
        Test1.addTests();
    } else if (input == 'AT') {
        Test1.showAllTest();
        break;
    } else if (input == 'NQ') {
        Ques1.addQuestion();

    } else if (input == 'AQ') {
        Ques1.showAllQuestion();
        break;
    } else if (input == 'DQ') {
        Ques1.deleteQuestion();
        break;
    } else if (input == "EQ") {
        Ques1.changeQuestion();
        break;
    }
}
class Question {
    id;
    content;
    answer;
    constructor(id, content, answer) {
        this.id = id;
        this.content = content;
        this.answer = answer;
    }
}
class editQuestion {
    questions = new Array();
    constructor(questions) {
        this.questions = questions; 5
    }

    addQuestion() {
        let id = prompt(" id Question : ");
        let content = prompt("content Question :");
        let answer = prompt("answer :");
        let question = new Question(id, content, answer);
        this.questions.push(question);
    }

    showAllQuestion() {
        for (let i = 0; i < this.questions.length; i++) {
            console.log(this.questions[i]);
        }
    }

    deleteQuestion() {
        let index = Number(prompt("nhập id câu hỏi muốn xóa : "));
        this.questions.splice(index - 1, 1);
    }

    changeQuestion() {
        let index = prompt("nhập id câu hỏi muốn sửa : ");
        let newContent = prompt("Nội dung mới: ")
        this.questions[index - 1].content = newContent;
    }
}

export { Question, editQuestion };
let h = document.querySelector('h1')
let buttons = document.querySelectorAll('div>div>p')
let sec1 = document.querySelector('.start');
let sec2 = document.querySelector('.mainsection');
let button = document.querySelector('.but')
let resultHeading = document.querySelector('h3')



function startquiz(){
    sec1.classList.add('hide');
    sec2.classList.remove('hide');
}
button.addEventListener('click',startquiz)

class Question{
    constructor(){
        this.num1= this.getRandomInt(50)
        this.num2= this.getRandomInt(50)
        this.question =  `${this.num1} + ${this.num2} `;
        this.answers = []
        this.getAnswers();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    getAnswers(){
        this.answers.splice(0, buttons.length)
        this.correctIndex = this.getRandomInt(buttons.length)
        for (let i = 0; i < buttons.length; i += 1){
            if (i === this.correctIndex){
                this.correct = this.num1 + this.num2;
                this.answers.push(this.correct);
            }else{
                this.answers.push(this.getRandomInt(100))
            }
        }
      }
    getQuestion(){
        this.num1= this.getRandomInt(50)
        this.num2= this.getRandomInt(50)
        this.question =  `${this.num1} + ${this.num2} `; 
    }
      
    display(){
        h.innerHTML = this.question;
        for (let i = 0; i < this.answers.length; i += 1){
            buttons[i].innerHTML= this.answers[i];
        }
    }
}






let quest1 = new Question()
quest1.display()

for (let i = 0; i<buttons.length; i+=1){
    buttons[i].addEventListener('click',checkAnswer(i))
}


 function checkAnswer(item){
    if(buttons[item].innerHTML === String(quest1.correct)){
        resultHeading.innerHTML='правильно!';
    } else{
        resultHeading.innerHTML='неправильно';
    }
    quest1.getQuestion();
    quest1.getAnswers();
    quest1.display();
   
}



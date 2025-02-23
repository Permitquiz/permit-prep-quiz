const strtbtn = document.querySelector('.Start-btn');
const popupbtn = document.querySelector('.popup');
const exitbtn = document.querySelector('.exit-btn');
const continuebtn = document.querySelector('.continue-btn');
const quizsecn = document.querySelector('.quizsec');
const quizboxs = document.querySelector('.quizbox');
strtbtn.onclick = () => {
    popupbtn.classList.add('active');
}
exitbtn.onclick = () => {
    popupbtn.classList.remove('active');
}
continuebtn.onclick = () => {
    quizsecn.classList.add('active');
    popupbtn.classList.remove('active');
    quizboxs.classList.add('active');
    showquestion(0);
    questioncounter(1);
    headerscore();

}
let questioncount = 0;
let questionnumb = 1;
let score = 0;
const nextbtn = document.querySelector('.next-btn');
nextbtn.onclick = () => {
    if(questioncount < question.length - 1){
    questioncount++;
    showquestion(questioncount);
    questionnumb++;
    questioncounter(questionnumb);
    nextbtn.classList.remove('active');
    }
    else{
        console.log('Question Completed');
    }
}
const optionlist = document.querySelector('.option-list');
function showquestion(index){
    const questiontext = document.querySelector('.questions')
    questiontext.textContent = `${question[index].numb}. ${question[index].questionz}`;
    let optiontag = `<div class="option"><span>${question[index].options[0]}</span></div>
    <div class="option"><span>${question[index].options[1]}</span></div>
    <div class="option"><span>${question[index].options[2]}</span></div>
    <div class="option"><span>${question[index].options[3]}</span></div>`;
    optionlist.innerHTML = optiontag;
    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick','OptionSelected(this)');
    }
}

function OptionSelected(answer){
    let userAnswer = answer.textContent;
    let correct = question[questioncount].answer;
    let selected = optionlist.children.length;
    if(userAnswer == correct){
        answer.classList.add("correct");
        score += 1;
        headerscore();
    }
    else{
        answer.classList.add("wrong");
        for(let i = 0; i< selected ; i++){
            if(optionlist.children[i].textContent == correct){
                optionlist.children[i].setAttribute('class','option correct');
            }
        }
    }
    for(let i = 0; i< selected ; i++){
        optionlist.children[i].classList.add('disable');
    }
    nextbtn.classList.add('active');
}


function questioncounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${question.length} Questions`;
}
function headerscore(){
    const headerscoreText = document.querySelector('.quizscore');
    headerscoreText.textContent = `Score: ${score} / ${question.length}`;


}
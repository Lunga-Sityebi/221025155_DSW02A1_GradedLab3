const btnExecute = document.getElementById('Execute');
const countBox = document.getElementById('sent-count');
const wordsDisplay = document.getElementById('words');

btnExecute.addEventListener('click', (e) => {
    e.preventDefault();

    let words = [];

    const sentence = document.getElementById('sentence').value;

    words = sentence.split(" ");

    let wordCount = words.length;

    countBox.value = wordCount.toString();

    words.forEach(element => {
        wordsDisplay.innerHTML += `<span style="text-decoration: underline;">${element}</span> `;
    });
})

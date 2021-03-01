
function CountWords(){

    let Words = document.getElementById("textArea").value;

    let Splitted = Words.split(" ");

    let WordNumber = Splitted.length;

    let TheDisplayer = document.getElementById("WordCountText").innerHTML = WordNumber

    console.log(WordNumber);


    
};
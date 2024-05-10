
const resultElement = document.getElementById("result");
let recognition;


function startConverting() {
    
    if('webKitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}

function setupRecognition(recognition) {
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const {finalResult,interTranscript}  =  processResults(event.results);
        resultElement.innerHTML = finalResult + interTranscript; 
    }

}
    
function processResults(results){

    let finalResult = '';
    let interTranscript = '';

    for(let i = 0;i<results.length;i++) {
        let transcript = results[i][0].transcript;
        transcript.replace("\n","<br>");

        if(results[i].ifFinal) {
           finalResult += transcript; 
        }else {
            interTranscript += transcript;
        }
    }
    return {finalResult,interTranscript};
}

function stopConverting() {
    
}
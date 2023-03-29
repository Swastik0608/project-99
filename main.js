var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("text_box").innerHTML=Content;
    speak();
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= document.getElementById("text_box").value;
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    height:500,
    width:500,
    jpeg_quality:90,
    image_format:'jpeg'
});
camera=document.getElementById("camera");
Prediction1 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qorn6llzx/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The Prediction Is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById('image_captured')
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    }else {
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML=results[0].label
        Predition1=results[0].label
        speak()
        if (results[0].label=="Best") {
            document.getElementById("update_emoji").innerHTML="👍"
        } if (results[0].label=="Victory") {
            document.getElementById("update_emoji").innerHTML="✌"
        }
        if (results[0].label=="Amazing") {
            document.getElementById("update_emoji").innerHTML="👌"
        }
        if (results[0].label=="Unity") {
            document.getElementById("update_emoji").innerHTML="🤘"
        }
        if (results[0].label=="Rock") {
            document.getElementById("update_emoji").innerHTML="✊"
        } if (results[0].label=="Clap") {
            document.getElementById("update_emoji").innerHTML="👏"
        }
        if (results[0].label=="Bye") {
            document.getElementById("update_emoji").innerHTML="👋"
        }
       

    }
}

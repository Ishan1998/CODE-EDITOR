function run(){
    let htmlCode= document.getElementById("html-code");
    let cssCode= document.getElementById("css-code");
    let jsCode= document.getElementById("js-code");
    let output= document.getElementById("output");
    document.getElementById("output").contentWindow.document.body.style.color='white';

    output.contentDocument.body.innerHTML = htmlCode = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value)
}
function copyText() {
    console.log("tast")
    var copiedText = document.getElementById("my-brand").innerHTML;
    console.log(copiedText);

    navigator.clipboard.writeText(copiedText);

};
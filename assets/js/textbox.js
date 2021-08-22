function showTextBox(boxName) {
    var x = document.getElementById(boxName)
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
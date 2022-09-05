let input = document.getElementById("inputfield");
let button = document.getElementById("button");
let TodoContainter = document.getElementById("here");

button.addEventListener("click", function() {
    if (! input.value == "") {
    var paragraph = document.createElement("p");
    paragraph.classList.add("Middle");
    paragraph.classList.add("Normalsize")
    paragraph.innerText = input.value;
    TodoContainter.append(paragraph);
    input.value = "";
    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";

    })

    

    paragraph.addEventListener("dblclick", function() {
        TodoContainter.removeChild(paragraph)
    })

}
})



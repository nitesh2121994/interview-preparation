document.addEventListener("DOMContentLoaded", () => {
    console.log('page load');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
})

$(document).ready(() => {
    console.log("page with jquery");

    const editableDiv = document.getElementById('editableDiv');
    editableDiv.addEventListener('input', function () {
        console.log('Content changed to:', editableDiv.innerHTML);
    })

})
$(window).on("load", () => {
    console.log("window with jquery");

})

$(document).ready(() => {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "get",
        dataType: "json",
        success: function (response) {
            console.log("jquery, response", response);

            const element = document.getElementById("element");
            const fragmentElement = document.createDocumentFragment();
            for (const item of response.slice(0, 5)) {
                const newElement = document.createElement("h1");
                newElement.textContent = item.title;
                fragmentElement.appendChild(newElement)
            }
            element.append(fragmentElement);

        },
        error: function (xhr, status, err) {
            console.log("jquery err", err);

        }
    })

    $.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
        console.log('.get res', res);

    })
})

window.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById("element");
    const element2 = document.getElementById("element2");
    if (element) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newElement = document.createElement("div");
            newElement.textContent = i;
            fragment.appendChild(newElement);
        }
        element.appendChild(fragment);

        this.setTimeout(() => {
            this.document.body.removeChild(element)
        })
    }
});


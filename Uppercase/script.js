document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#btn').addEventListener('click', () => {

        let text = document.querySelector('#texto').value;

        document.querySelector("#result").innerHTML = upper(text);

    })

    function upper(text) {

        return text.toUpperCase();

    }

})
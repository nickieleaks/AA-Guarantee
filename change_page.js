var warrantyButton = document.getElementById('warranty-button');
var trackingButton = document.getElementById('tracking-button');
var contentElement = document.getElementById('content');
var links;

change('warranty') // Inital Load
warrantyButton.addEventListener('click', () => change('warranty'));
trackingButton.addEventListener('click', () => change('tracking'));

function change(str) {
    if (!contentElement.classList.contains(str)) {
        fetch("pages/" + str + ".html")
            .then(response => response.text())
            .then(data => {
                // Set the HTML content fetched from the file
                contentElement.innerHTML = data;
                contentElement.classList = str + 'table-container';

                //Allows the Buttons to open a new link, button not onClick because 
                //content security policy unsafe
                links = contentElement.querySelectorAll('.myButton');
                links.forEach(link => {
                    link.onclick = () => {
                        window.open(link.getAttribute('to'))
                    }
                });

        })
    }
}




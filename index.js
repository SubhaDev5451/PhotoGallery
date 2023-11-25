var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

document.addEventListener("keydown", function(event) {
    // Check if Alt + W is pressed
    if (event.altKey && event.key === 'w') {
        downloadImage(fullImg.src);
    }
});

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function downloadImage(src) {
    // Create a link element
    var link = document.createElement('a');
    link.href = src;
    
    // Set the download attribute to force download
    link.download = 'image.jpg';
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}

function abt() {
    alert("You are Going to My About Page");
    window.location.href = "https://654f1d206f869974dd57cc20--euphonious-donut-89ba8b.netlify.app/";
}

function fdb() {
    alert("My email is ksubhank38@gmail.com [EMAIL ME AT THIS FOR FEEDBACK");
    window.location.href = "https://mail.google.com/mail/u/0/#inbox";
}

function els() {
    subhanKashif = {
        images: "./images/subhanK/",
    };
}

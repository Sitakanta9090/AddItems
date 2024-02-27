

document.getElementById("card1").addEventListener("click", function () {
    var content = document.getElementById("content1");
    var radio = document.getElementById("card-radio1");

    // Get the size and color dropdown elements
    var sizeDropdown = document.getElementById("size");
    var colorDropdown = document.getElementById("color");

    // Get the elements to display the selected values
    var selectedSizeElement = document.getElementById("selectedSize");
    var selectedColorElement = document.getElementById("selectedColor");

    // Add event listeners to the dropdowns
    sizeDropdown.addEventListener("change", function () {
        selectedSizeElement.textContent = "Selected Size: " + sizeDropdown.value;
    });

    colorDropdown.addEventListener("change", function () {
        selectedColorElement.textContent = "Selected Color: " + colorDropdown.value;
    });

    if (content.style.display === "none") {
        content.style.display = "block";
        radio.checked = true;
    } else {
        content.style.display = "none";
        radio.checked = false;
    }
});
document.getElementById("card2").addEventListener("click", function () {
    var content = document.getElementById("content2");
    var radio = document.getElementById("card-radio2");


    // Get the size and color dropdown elements
    var sizeDropdown = document.getElementById("size");
    var colorDropdown = document.getElementById("color");

    // Get the elements to display the selected values
    var selectedSizeElement = document.getElementById("selectedSize");
    var selectedColorElement = document.getElementById("selectedColor");

    // Add event listeners to the dropdowns
    sizeDropdown.addEventListener("change", function () {
        selectedSizeElement.textContent = "Selected Size: " + sizeDropdown.value;
    });

    colorDropdown.addEventListener("change", function () {
        selectedColorElement.textContent = "Selected Color: " + colorDropdown.value;
    });
    if (content.style.display === "none") {
        content.style.display = "block";
        radio.checked = true;
    } else {
        content.style.display = "none";
        radio.checked = false;
    }
});
document.getElementById("card3").addEventListener("click", function () {
    var content = document.getElementById("content3");
    var radio = document.getElementById("card-radio3");


    // Get the size and color dropdown elements
    var sizeDropdown = document.getElementById("size");
    var colorDropdown = document.getElementById("color");

    // Get the elements to display the selected values
    var selectedSizeElement = document.getElementById("selectedSize");
    var selectedColorElement = document.getElementById("selectedColor");

    // Add event listeners to the dropdowns
    sizeDropdown.addEventListener("change", function () {
        selectedSizeElement.textContent = "Selected Size: " + sizeDropdown.value;
    });

    colorDropdown.addEventListener("change", function () {
        selectedColorElement.textContent = "Selected Color: " + colorDropdown.value;
    });
    if (content.style.display === "none") {
        content.style.display = "block";
        radio.checked = true;
    } else {
        content.style.display = "none";
        radio.checked = false;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Get all card contents
    var cardContents = document.querySelectorAll(".card-content");

    // Loop through each card content and hide it
    cardContents.forEach(function (content) {
        content.style.display = "none";
    });
});


// Get the size and color dropdown elements
// var sizeDropdown = document.getElementById("size");
// var colorDropdown = document.getElementById("color");

// // Get the elements to display the selected values
// var selectedSizeElement = document.getElementById("selectedSize");
// var selectedColorElement = document.getElementById("selectedColor");

// // Add event listeners to the dropdowns
// sizeDropdown.addEventListener("change", function () {
//     selectedSizeElement.textContent = "Selected Size: " + sizeDropdown.value;
// });

// colorDropdown.addEventListener("change", function () {
//     selectedColorElement.textContent = "Selected Color: " + colorDropdown.value;
// });

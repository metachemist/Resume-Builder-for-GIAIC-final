var toggleButton = document.getElementById('toggle-hobbies');
var hobbies = document.getElementById('hobbies');
toggleButton.addEventListener('click', function () {
    if (hobbies.style.display == 'none') {
        hobbies.style.display = 'block';
    }
    else {
        hobbies.style.display = 'none';
    }
});

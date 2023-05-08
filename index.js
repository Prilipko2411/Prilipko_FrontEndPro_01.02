const input = document.getElementById('input');
const div = document.getElementById('div');

input.addEventListener(('focus'), function() {
    div.style.display = 'block';
});

input.addEventListener(('blur'), function() {
    div.style.display = 'none';
});
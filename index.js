const options = document.querySelectorAll('.option');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const count = option.querySelector('.count');
    let value = parseInt(count.innerText);
    value += 1;
    count.innerText = value;
  });
});



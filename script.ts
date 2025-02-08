const toggleButton = document.getElementById('toggle-hobbies')as HTMLButtonElement;
const hobbies = document.getElementById('hobbies')as HTMLElement;

toggleButton.addEventListener('click', () => {
  if(hobbies.style.display == 'none'){
    hobbies.style.display = 'block';
    
  } else {
    hobbies.style.display = 'none';
  }
});
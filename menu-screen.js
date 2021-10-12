// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
var theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];


class MenuScreen {
  constructor(container) {
	  this.container = container;
	  fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json');
	
	  
	  value = theme[Math.floor(Math.random()*10)];;
	  
	  this.goButton = document.getElementById("go");
	  this.goButton = addEventListener('click', this.onClick);
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  Onclick(event){
    event.preventDefault();
	url = "https://api.giphy.com/v1/gifs/search?q="+ value +"&api_key=dc6zaTOxFJmzC&limit=25&rating=g";
	

  // TODO(you): Add methods as necessary.
   hide() {
  	this.container.classList.add('inactive');
  }
   show () {
  	this.container.classList.remove('inactive');
  }
}

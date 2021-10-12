// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(container) {
	  this.container = container;
	  this.gif;
    // TODO(you): Implement the constructor and add fields as necessary.
	  this.audio = new AudioPlayer();
	  let play = new button();
  }
  hide() {
    this.container.classList.add('inactive');
  }
  show(){
    this.container.classList.remove('inactive');
	document.getElementById('background').classList.remove('inactive'); 
    this.audio.play();
  }
  // TODO(you): Add methods as necessary.
}

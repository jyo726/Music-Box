// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
	this.click = this.click.bind(this);
	this.playing = true;
    this.container = document.querySelector("#button");
	this.container = addEventListener('click', this.click);
  }
  // TODO(you): Add methods as necessary.
  click(event) {
    if (this.playing) {
      this.pause();
    }
    else {
      this.play();
    }
    this.playing = !this.playing;
  }
  
  play() {
    this.container.style.backgroundImage = "url(images/pause.png)";
    app.music.audio.play();
  }

  pause() {
    this.container.style.backgroundImage = "url(images/play.png)";
    app.music.audio.pause();
  }
}

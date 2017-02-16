import streamUrls from './streamUrls';

class SelectStation {
  constructor() {
    this.urls = streamUrls;
    this.audioSrc = document.getElementById('audioSrc');
    this.radioPrograms = document.querySelectorAll('.program-btn');
    this.events();
  }

  events() {
    this.selectProgramEvent();
  }

  selectProgramEvent() {
    // This event is checking which button was clicked and takes data-program="" attribute.
    // After that it call setProgramSrc method which will set src URL
    // from streamUrls.js equal to data-program attribute.
    Array.from(this.radioPrograms).forEach((radioProgram) => {
      radioProgram.addEventListener('click', (e) => {
        e.preventDefault();
        this.programName = e.target.getAttribute('data-program');
        this.currentProgramName = this.audioSrc.getAttribute('data-current-program');
        if (this.programName === this.currentProgramName) {
          this.playPauseRadio();
        } else {
          this.setProgramSrc(this.programName);
          this.isPlaying = false;
          this.playPauseRadio();
        }
      });
    });
  }

  setProgramSrc(programName) {
    this.audioSrc.setAttribute('src', this.urls[programName]);
    this.audioSrc.setAttribute('data-current-program', programName);
  }


  playPauseRadio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.pauseRadio();
    } else {
      this.isPlaying = true;
      this.playRadio();
    }
  }

  playRadio() {
    this.audioSrc.play();
  }

  pauseRadio() {
    this.audioSrc.pause();
  }
}

export default SelectStation;

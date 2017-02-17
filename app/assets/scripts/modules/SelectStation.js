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
        this.setProgramSrc(this.programName);
        if (this.programName === this.currentProgramName) {
          this.playStopRadio();
        } else {
          this.isPlaying = false;
          this.playStopRadio();
        }
      });
    });
  }

  setProgramSrc(programName) {
    this.audioSrc.setAttribute('src', this.urls[programName]);
    this.audioSrc.setAttribute('data-current-program', programName);
  }


  playStopRadio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.stopRadio();
    } else {
      this.isPlaying = true;
      this.playRadio();
    }
  }

  playRadio() {
    this.audioSrc.play();
  }

  stopRadio() {
    this.audioSrc.pause();
    // prevent downloading stream from source when radio is stoped.
    this.audioSrc.setAttribute('src', '');
  }
}

export default SelectStation;

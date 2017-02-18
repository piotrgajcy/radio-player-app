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
        this.program = e.currentTarget;
        this.programName = this.program.getAttribute('data-program');
        this.currentProgramName = this.audioSrc.getAttribute('data-current-program');
        this.setProgramSrc(this.programName);
        if (this.programName === this.currentProgramName) {
          this.playStopRadio();
        } else {
          this.isPlaying = false;
          this.playStopRadio();
        }
      }, false);
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
      this.removeCurrentClass();
    } else {
      this.isPlaying = true;
      this.playRadio();
      this.removeCurrentClass();
      this.addCurrentClass();
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

  removeCurrentClass() {
    this.currentProgramClass = document.getElementsByClassName('program-btn--current');
    while (this.currentProgramClass.length) {
      this.currentProgramClass[0].classList.remove('program-btn--current');
    }
  }

  addCurrentClass() {
    this.program.className += ' program-btn--current';
  }
}

export default SelectStation;

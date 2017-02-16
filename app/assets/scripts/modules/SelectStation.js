import streamUrls from './streamUrls';

class SelectStation {
  constructor() {
    this.urls = streamUrls;
    this.audioSrc = document.getElementById('audioSrc');
    this.radioPrograms = document.querySelectorAll('.btn');
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
        this.setProgramSrc(this.programName);
        this.playRadio();
      });
    });
  }

  setProgramSrc(programName) {
    this.audioSrc.setAttribute('src', this.urls[programName]);
  }

  playRadio() {
    this.audioSrc.play();
  }
}

export default SelectStation;

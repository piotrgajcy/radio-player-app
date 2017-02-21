import streamUrls from './streamUrls';

class SelectStation {
  constructor() {
    this.urls = streamUrls;
    this.audioSrc = document.getElementById('audioSrc');
    this.programScreen = document.getElementById('radio-player__program-screen');
    this.radioPrograms = document.querySelectorAll('.program-btn');
    this.soundSpectrum = document.getElementById('sound-spectrum');
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
        this.showOnScreen(this.programName, this.currentProgramName);
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
      this.removeSpectrumAnimation();
    } else {
      this.isPlaying = true;
      this.playRadio();
      this.removeCurrentClass();
      this.addCurrentClass();
      this.addSpectrumAnimation();
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

  removeSpectrumAnimation() {
    this.soundSpectrum.classList.remove('icon--visible');
  }

  addSpectrumAnimation() {
    this.soundSpectrum.classList.add('icon--visible');
  }

  showOnScreen(programName, currentProgramName) {
    if (programName === currentProgramName) {
      this.programScreen.classList.toggle(`radio-player__program-screen--${programName}`);
    } else {
      this.programScreen.classList.remove(`radio-player__program-screen--${currentProgramName}`);
      this.programScreen.classList.add(`radio-player__program-screen--${programName}`);
    }
  }
}

export default SelectStation;

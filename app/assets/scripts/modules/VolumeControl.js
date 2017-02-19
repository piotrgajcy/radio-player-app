class VolumeControl {
  constructor() {
    this.volumeRange = document.getElementById('volume-control__volume');
    this.volumeSpeaker = document.getElementById('volume-control__speaker');
    this.volumeRangeEvents();
    this.toggleVolumeRangeEvent();
  }

  volumeRangeEvents() {
    this.volumeRange.addEventListener('change', this.rangeUpdate);
    this.volumeRange.addEventListener('mousemove', this.rangeUpdate);
  }

  rangeUpdate() {
    this.audioSrc = document.getElementById('audioSrc');
    this.audioSrc[this.name] = this.value;
  }

  toggleVolumeRangeEvent() {
    this.volumeSpeaker.addEventListener('click', this.toggleVolumeRange.bind(this));
  }

  toggleVolumeRange() {
    this.volumeRange.classList.toggle('volume-control__volume--visible');
    this.volumeSpeaker.classList.toggle('volume-control__speaker--dark');
  }

}

export default VolumeControl;

class VolumeControl {
  constructor() {
    this.volumeRange = document.getElementById('volume-control');
    this.volumeRangeEvents();
  }

  volumeRangeEvents() {
    this.volumeRange.addEventListener('change', this.rangeUpdate);
    this.volumeRange.addEventListener('mousemove', this.rangeUpdate);
  }

  rangeUpdate() {
    this.audioSrc = document.getElementById('audioSrc');
    this.audioSrc[this.name] = this.value;
  }

}

export default VolumeControl;

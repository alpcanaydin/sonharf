class Computer {
  constructor(lang = 'tr') {
    if (!this.isSupported()) {
      return;
    }

    this.synth = window.speechSynthesis;

    this.synthesisUtterance = new window.SpeechSynthesisUtterance();
    this.synthesisUtterance.lang = lang;
  }

  isSupported() {
    return typeof window.SpeechSynthesisUtterance === 'function';
  }

  speak(text, callback = () => {}) {
    this.synthesisUtterance.text = text;
    this.synthesisUtterance.onend = callback;
    this.synth.speak(this.synthesisUtterance);
  }
}

const computer = new Computer();
export default computer;

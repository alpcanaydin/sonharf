class Recognition {
  constructor(lang = 'tr-TR') {
    if (!this.isSupported()) {
      return;
    }

    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.lang = lang;
  }

  isSupported() {
    return typeof window.webkitSpeechRecognition === 'function';
  }

  askPermission() {
    return new Promise((resolve, reject) => {
      const askRecognition = new window.webkitSpeechRecognition();
      askRecognition.onerror = reject;
      askRecognition.onstart = resolve;

      askRecognition.start();
      askRecognition.abort();
    });
  }

  on(event, callback) {
    this.recognition[`on${event}`] = result => callback(result);
  }

  start() {
   this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

  abort() {
    this.recognition.abort();
  }
}

const recognition = new Recognition();
export default recognition;

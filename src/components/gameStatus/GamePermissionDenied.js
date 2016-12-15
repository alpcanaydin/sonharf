import React, { Component } from 'react';

import Mic from '../element/Mic';

class GamePermissionDenied extends Component {
  render() {
    return (
      <div>
        <Mic size="big" className="gap-bottom-large" />
        <h1 className="gap-bottom">Mikrofon bloklu 😞</h1>
        <p>
          Mikrofon kullanımına izin vermedin. Eğer kararını değiştirirsen adres çubuğunda
          bulunan bilgi ikonundan mikforona izin verebilirsin.
        </p>
      </div>
    );
  }
}

export default GamePermissionDenied;

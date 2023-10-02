import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function Speech() {
  const [value, setValue] = useState('결과');

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
      <h2>음성인식</h2>

      <div>{value}</div>

      <button onMouseDown={listen} onMouseUp={stop}>
        🎤speech
      </button>

      {listening && <div>음성인식 중</div>}
    </div>
  );
}

export default Speech;

import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { ReactMediaRecorder } from 'react-media-recorder';

function App() {
  // 음성 인식 후 텍스트 반환값

  const [resp, setResp] = useState('');

  const fileupload = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('upload', document.frm.upload.files[0]);

    axios
      .post('http://localhost:3000/fileUpload', formData)
      .then(function (resp) {
        setResp(resp.data.text);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div>
      <h2>음성 녹음 및 다운로드</h2>

      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>start recording</button>
            <button onClick={stopRecording}>stop recording</button>
            <br />
            
            {/* 녹음한 파일 들어보기 */}
            <audio src={mediaBlobUrl} controls></audio>
            <br />

            {/* 녹음한 파일 다운로드 */}
            <a href={mediaBlobUrl} download="myvoice.wav">
              File Download
            </a>
          </div>
        )}
      />

      <hr />
      <h2>파일 업로드 및 텍스트 변환</h2>

      <form name="frm" onSubmit={fileupload} encType="multipart/form-data">
        <input type="file" name="upload" accept="*" />
        <input type="submit" value="upload" />
      </form>

      <h3>결과: {resp}</h3>
    </div>
  );
}

export default App;

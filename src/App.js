import React, { useState } from 'react';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [message, setMessage] = useState('Toast message!');
  const [horizontal, setHorizontal] = useState('left');
  const [vertical, setVertical] = useState('top');
  const [type, setType] = useState('success');
  const [duration, setDuration] = useState('5');

  const messageOnChange = (e) => {
    setMessage(e.target.value);
  };

  const horizontalOnChange = (e) => {
    console.log(e.target.value);
    setHorizontal(e.target.value);
  };

  const verticalOnChange = (e) => {
    console.log(e.target.value);
    setVertical(e.target.value);
  };

  const typeOnChange = (e) => {
    setType(e.target.value);
  };

  const durationOnChange = (e) => {
    setDuration(e.target.value);
  };

  //custom toast type?
  const showToasts = () => {
    const typeOfToast = `toast.${type}`;
    console.log(typeOfToast);
    toast.success(message, {
      position: `${vertical}-${horizontal}`,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className="container">
      <h1>Toast Popup</h1>
      <form className="dropdowns">
        <select
          name="position"
          id="horizontal-position"
          value={horizontal}
          onChange={horizontalOnChange}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        <br />
        <select
          name="postion"
          id="vertical-position"
          onChange={verticalOnChange}
          value={vertical}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
        <br />

        <select name="type" id="type" value={type} onChange={typeOnChange}>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
        </select>
        <br />

        <input
          type="text"
          name="mesasge"
          id="message"
          placeholder="Message"
          value={message}
          onChange={messageOnChange}
        />
        <br />

        <label for="durantion">
          Duration
          <input
            type="range"
            name="duration"
            id="duration"
            min="3"
            max="15"
            value={duration}
            onChange={durationOnChange}
          />
        </label>
        <br />

        <button type="button" className="btn btn-primary" onClick={showToasts}>
          Show Toast
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

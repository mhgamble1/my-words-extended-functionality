import React, { useState, useEffect } from "react";
import {Button } from "react-bootstrap";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url, word }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button variant="primary" onClick={toggle}>{playing ? "⏸︎" : word}</Button>
    </div>
  );
};

export default Player;
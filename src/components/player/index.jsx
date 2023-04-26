/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext({});

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>;
    </PlayerContext.Provider>
  );
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close>X</Close>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

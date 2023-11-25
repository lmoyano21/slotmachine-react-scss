import React, { useEffect, useState } from 'react';
import './slotsStyle.scss';
import './Button.css';

const ICON_WIDTH = 79;
const ICON_HEIGHT = 79;
const NUM_ICONS = 9;
const TIME_PER_ICON = 100;

const iconMap = [
  'Banana',
  'Seven',
  'Cherry',
  'Plum',
  'Orange',
  'Bell',
  'Bar',
  'Lemon',
  'Melon',
];

const Roll = (reel, offset = 0) => {
  return new Promise((resolve, reject) => {
    const delta =
      (offset + 2) * NUM_ICONS + Math.round(Math.random() * NUM_ICONS);
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(
      style.getPropertyValue('background-position-y')
    );
    const targetBackgroundPositionY = backgroundPositionY + delta * ICON_HEIGHT;
    const normTargetBackgroundPositionY =
      targetBackgroundPositionY % (NUM_ICONS * ICON_HEIGHT);

    reel.style.transition = `background-position-y ${
      8 + delta * TIME_PER_ICON
    }ms cubic-bezier(0.05, 0.83, 0.43, 0.96)`; // para que desacelere cuando termina el rolling..
    reel.style.backgroundPositionY = `${targetBackgroundPositionY}px`;

    setTimeout(() => {
      reel.style.transition = 'none';
      reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
      resolve(delta % NUM_ICONS);
    }, 8 + delta * TIME_PER_ICON);
  });
};

function SlotRoll() {
  const [indexes, setIndexes] = useState([0, 0, 0]);
  const [debugEl, setDebugEl] = useState(''); // Utilizamos un estado para debugEl
  const [isRolling, setIsRolling] = useState(false);

  const rollReels = () => {
    if (isRolling) return; // Si ya está en marcha, no hagas nada

    setIsRolling(true);
    setDebugEl('Rolling...');
    const reelList = document.querySelectorAll('.slots > .reel');

    Promise.all([...reelList].map((reel, i) => Roll(reel, i))).then(
      (deltas) => {
        const newIndexes = indexes.map(
          (value, i) => (value + deltas[i]) % NUM_ICONS
        );
        setIndexes(newIndexes);
        console.log(newIndexes);
        const result = newIndexes.map((i) => iconMap[i]).join(' - ');
        setDebugEl(result); // Actualizamos debugEl utilizando el estado
        console.log(debugEl.value);

        // Comprobaciones para verificar los ganadores
        if (
          newIndexes[0] === newIndexes[1] ||
          newIndexes[1] === newIndexes[2]
        ) {
          const winCls = newIndexes[0] === newIndexes[2] ? 'win2' : 'win1';
          document.querySelector('.slots').classList.add(winCls);
          setTimeout(
            () => document.querySelector('.slots').classList.remove(winCls),
            2000
          );
        } else {
          setIsRolling(false); // Asegúrate de establecer la bandera en falso si no hay ganancias.
        }
      }
    );
  };

  return (
    <>
      <button onClick={rollReels}>
        TRY YOUR LUCK!
        <div className="star-1">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
        <div className="star-2">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
        <div className="star-3">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
        <div className="star-4">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
        <div className="star-5">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
        <div className="star-6">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"
            />
          </svg>
        </div>
      </button>
      <div className="slots">
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
      </div>
      <span id="debug" className="debug">
        {debugEl}
      </span>
    </>
  );
}

export default function App() {
  return (
    <>
      <SlotRoll />
    </>
  );
}

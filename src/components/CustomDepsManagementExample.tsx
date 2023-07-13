import { CSSProperties, useLayoutEffect, useReducer, useRef } from 'react';
import { usePrevious } from '../hooks/usePrevious';
import _ from 'lodash';
import { useCustomCompare } from '../hooks/useCustomCompare';

function useBodyStyle(styles: CSSProperties) {
  // const shouldRunEffect = useRef(0);
  // const prevStyles = usePrevious(styles).current;

  // if (prevStyles && !_.isEqual(styles, prevStyles)) {
  //   shouldRunEffect.current++;
  // }
  // useLayoutEffect(() => {
  //   console.log('effect');
  //   Object.entries(styles).map(([style, value]) => {
  //     document.body.style.setProperty(style, String(value));
  //   });
  // }, [shouldRunEffect.current]);

  useLayoutEffect(() => {
    console.log('effect');
    Object.entries(styles).map(([style, value]) => {
      document.body.style.setProperty(style, String(value));
    });
  }, [useCustomCompare(styles, _.isEqual)]);
}

export const CustomDepsManagementExample = () => {
  const [f, forceUpdate] = useReducer(v => v + 1, 0);

  useBodyStyle({
    height: '100%',
    width: '100%',
    background: f === 5 ? 'grey' : '',
  });

  return (
    <>
      <div>I just render for the sake of the example {f}</div>
      <button onClick={forceUpdate}>Rerender Component</button>
    </>
  );
};

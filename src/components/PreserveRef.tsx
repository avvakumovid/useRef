import { useEffect, useReducer, useRef } from 'react';

let previousRef: React.Ref<HTMLDivElement> | null = null;

export const PreserveRef = () => {
  const [f, forceUpdate] = useReducer(v => v + 1, 2);

  const ref = useRef<HTMLDivElement>(null);

  if (previousRef) {
    console.log('previousRef === ref', previousRef === ref);
  }

  previousRef = ref;

  useEffect(() => {
    console.log(ref);
  }, []);

  if (previousRef)
    return (
      <>
        {f}
        <div>I`m a div</div>
        <button onClick={forceUpdate}>Trigger Rerender</button>
      </>
    );
};

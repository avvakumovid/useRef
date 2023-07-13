import { useEffect, useRef } from 'react';

// При рендере компонента мы получаем ссылку на необходимый нам див,
// при рендере компонента происходит маунт и после чего выводится в консоль ссылка на нужный нам див
export const Simple = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  return <div ref={ref}>I`m a div</div>;
};

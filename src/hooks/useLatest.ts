import { useLayoutEffect, useRef } from 'react';


export function useLatest<Value>(value: Value) {
  const valueRef = useRef<Value>(value)
  
  valueRef.current = value

  return valueRef;
}


//useLatest - concurrent react лучше это использовать
export function useLatestConcurrent<Value>(value: Value) {
  const valueRef = useRef<Value>(value)
  
  useLayoutEffect(() =>{
    valueRef.current = value
  })

  return valueRef;
}
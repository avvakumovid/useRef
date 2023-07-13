import { useState } from 'react';
import './App.css';
import { Simple } from './components/Simple';
import { PreserveRef } from './components/PreserveRef';
import { UncontrolledFormProblem } from './components/UncontrolledFormProblem';
import { UncontrolledFormSolution } from './components/UncontrolledFormSolution';
import { UseWindowEventExample } from './components/UseWindowEvent';
import { UseIsMountedHook } from './components/UseIsMountedHook';
import { CustomDepsManagementExample } from './components/CustomDepsManagementExample';

type Variant =
  | 'simple'
  | 'preserve-ref'
  | 'uncontrolled-form-problem'
  | 'uncontrolled-form-solution'
  | 'use-window-event-example'
  | 'use-is-mounted-hook'
  | 'custom-deps-management-example';

function App() {
  const [variant, setVariant] = useState<Variant>('simple');
  return (
    <>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <button onClick={() => setVariant('simple')}>simple</button>
        <button onClick={() => setVariant('preserve-ref')}>preserve-ref</button>
        <button onClick={() => setVariant('uncontrolled-form-problem')}>
          uncontrolled-form-problem
        </button>
        <button onClick={() => setVariant('uncontrolled-form-solution')}>
          uncontrolled-form-solution
        </button>
        <button onClick={() => setVariant('use-window-event-example')}>
          use-window-event-example
        </button>
        <button onClick={() => setVariant('use-is-mounted-hook')}>
          use-is-mounted-hook
        </button>
        <button onClick={() => setVariant('custom-deps-management-example')}>
          custom-deps-management-example
        </button>
      </div>
      {variant === 'simple' && <Simple />}
      {variant === 'preserve-ref' && <PreserveRef />}
      {variant === 'uncontrolled-form-problem' && <UncontrolledFormProblem />}
      {variant === 'uncontrolled-form-solution' && <UncontrolledFormSolution />}
      {variant === 'use-window-event-example' && <UseWindowEventExample />}
      {variant === 'use-is-mounted-hook' && <UseIsMountedHook />}
      {variant === 'custom-deps-management-example' && (
        <CustomDepsManagementExample />
      )}
    </>
  );
}

export default App;

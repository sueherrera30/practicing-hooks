import React, {  createContext } from 'react';
import { ToggleButton } from './ToggleButton';
import Counter from './Counter';
import { useTitle } from './hooks/useTitle';

  export const UserContext = createContext();

  
  const App = () => {
    const [ value, setValue ] = useTitle('');
    const formSubmit = () => {
      console.log('hello submit, this be sent to: ' + value);
      setValue('');
    };
    return (
      <UserContext.Provider
        value={{
          user: true,
        }}
      >
        <div className="main-wrapper">
          <h1>Level Up Dishes</h1>
          <ToggleButton />
          <Counter />
          <form onSubmit={e => {
            e.preventDefault();
            formSubmit();
          }}>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
            {
              value !== '' && <h1>hello the value saved is {value }</h1>
            }
            <button type='submit'>submit</button>
          </form>
        </div>
      </UserContext.Provider>
    );
};

export default App;

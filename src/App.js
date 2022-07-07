import React, {  createContext, useMemo, useDebugValue } from 'react';
import { animated, useSpring } from 'react-spring';

import { ToggleButton } from './ToggleButton';
import Counter from './Counter';
import { useTitle } from './hooks/useTitle';
import useAbortableFetch from 'use-abortable-fetch';

  export const UserContext = createContext();

  
  const App = () => {
    const [ value, setValue ] = useTitle('');
    // const [dishes, setDishes] = useState([]);
    const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

    const formSubmit = () => {
      console.log('hello submit, this be sent to: ' + value);
      setValue('');
    };

    const reverseWord = word => {
      console.log('function called each render');
      return word.split("").reverse().join("");
    }

    // const title = 'Sue lucero martinez herrera'

    const TitleReverse =  useMemo(() => reverseWord(value), [value]);
    useDebugValue(value);

    // const fetchData = async () => {
    //   const response =  await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    //  const data = await response.json()
    //  setDishes(data);
    // };

    // useEffect(() => {
    //   fetchData();
    // }, []);

    const { data } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    // if(!data) return null;
    // if(loading) return <h1>loading...</h1>


    return (
      <UserContext.Provider
        value={{
          user: true,
        }}
      >
        <div className="main-wrapper">
          <animated.h1 style={animationProps}>Level Up Dishes</animated.h1>
          <h1>{TitleReverse}</h1>
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
          </form>{
            data &&
            data.map(dish => (
              <article className='dish-card dish-card--withImage'>
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <div className="ingredients">
                  {
                    dish.ingredients.map(ingredient => (
                      <span>{ingredient}</span>
                    ))
                  }
                </div>
              </article>
            ))
          }
        </div>
      </UserContext.Provider>
    );
};

export default App;

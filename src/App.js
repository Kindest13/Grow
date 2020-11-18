import { StrictMode, useState, useEffect } from "react";
import StrictModeComponent from "./components/StrictModeComponent/StrictModeComponent";
import withLoader from "./hocs/withLoader";
import ComponentA from "./hocs/example";
import ComponentB from './components/CompB/CompB';
import ComponentC from './components/CompC/CompC';
import ReposList from "./components/ReposList/ReposList";
import Counter from './components/Counter/Counter';
import LoginForm from './components/LoginForm/LoginForm';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const ListWithLoader = withLoader(ReposList);

function App() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    (async () => {
      const fetchedRepos = await (
        await fetch(`https://api.github.com/users/Kindest13/repos`)
      ).json();
      setTimeout(() => {
        setRepos(fetchedRepos);
      }, 1000);
    })();
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <LoginForm />
      </ErrorBoundary>
      <ComponentA>
        {(state) => <ComponentB {...state} />}
        {(state) => <ComponentC {...state} />}
      </ComponentA>
      <Counter render={({ counter, decrement, increment }) => (
        <div>
          <h1>Counter using Render Props</h1>
          <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        </div>
      )} />
      <ListWithLoader repos={repos} />
      <StrictMode>
        <StrictModeComponent />
      </StrictMode>
    </div>
  );
}

export default App;

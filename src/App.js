import { StrictMode, useState, useEffect } from 'react';
import StrictModeComponent from './components/StrictModeComponent/StrictModeComponent';
import withLoader from './hocs/withLoader';
import ReposList from './components/ReposList/ReposList';

const ListWithLoader = withLoader(ReposList);

function App() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    (async () => {
      const fetchedRepos = await (await fetch(`https://api.github.com/users/Kindest13/repos`)).json();
      setTimeout(() => {
        setRepos(fetchedRepos);
      }, 1000);
    })();
  }, [])

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>HOC withLoader</h1>
      <ListWithLoader repos={repos} />
      <StrictMode>
        <StrictModeComponent name="Ruslan" />
      </StrictMode>
    </div>
  );
}

export default App;

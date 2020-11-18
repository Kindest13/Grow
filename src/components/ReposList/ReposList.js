import PropTypes from "prop-types";
import "./ReposList.css";

export default function ReposList({ repos }) {
  if (!repos) return null;
  if (!repos.length) return <p>No repos, sorry</p>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>HOC withLoader</h1>
      <table className="repos-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
};

import Loader from "../components/Loader/Loader";

export default function withLoading(WrappedComponent) {
  return function withLoadingComponent({ repos, ...props }) {
    console.log(repos);
    return repos ? <WrappedComponent repos={repos} {...props} /> : <Loader />;
  };
}

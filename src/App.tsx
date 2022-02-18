import React from 'react';
import logo from './logo.svg';
import { usePostsQuery, usePostQuery } from "./services/postApi"
import './App.css';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery()
  return (
    <div className="App">

      <h1>React Redux Toolkit RTK Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (<div>  {data?.map((post,) =>
      (<div key={post.id}><h1 >{post.title}</h1>
        <span><ContactDetail id={post.id} /></span></div>))}
      </div>)}
    </div>
  );
}

export const ContactDetail = ({ id }: { id: number }) => {
  const { data } = usePostQuery(id);
  return (
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  )
}

export default App;

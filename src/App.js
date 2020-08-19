import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

// Connecting this site to the GraphQL API
const client = new ApolloClient({
	uri:
		"https://api-ap-northeast-1.graphcms.com/v2/cke1b4a2i1i5u01w8fk98293h/master",
	cache: new InMemoryCache(),
});

// Writing query
const GET_POSTS = gql`
	query GET_ALL_POSTS {
		posts {
			stage
			id
			title
			body
		}
	}
`;

// Running query outside of React
// Note: This is not a good real world practice. However, it works.
// client
//   .query({
//     query: testQuery
//   })
//   .then((res) => console.log(res));

function Posts() {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) return 'Loading...';

  const { posts } = data

  return(
    posts.map(
      post => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    )
  );
}

// Apollo Provider attached the client to this React App
function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
            <h2>React GraphQL Apollo - Blog App</h2>
          </header>
          <Posts />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;

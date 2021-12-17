import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import BookList from './views/Books/BookList';
import BookDetails from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/">
            <section>
              <h2>Welcome to Dangalf&apos;s Library of Computer Science!</h2>
              <p className="home">
                Check out the amazing selection of books in our <a href="/books">catalog</a>.
              </p>
            </section>
          </Route>
          <Route exact path="/books" component={BookList} />
          <Route path="/books/:id" component={BookDetails} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

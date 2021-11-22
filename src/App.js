import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Loader from "./components/Loader/Loader";
import s from "./components/Loader/Loader.module.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /* webpackChunkName: "not-found-page" */)
);

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div className={s.loader}>
            <Loader />
          </div>
        }
      >
        <Section>
          <Container>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/movies" exact>
                <MoviesPage />
              </Route>

              <Route path="/movies/:movieId">
                <MovieDetailsPage />
              </Route>

              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Container>
        </Section>
      </Suspense>
    </>
  );
}

import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { fetchMoviesFullImfo, IMAGE_URL } from "../services/moviesshelf-api";
import MovieСard from "../components/MovieСard/MovieСard";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import s from "../components/Loader/Loader.module.css";

const CastsList = lazy(() =>
  import(
    "../components/CastsList/CastsList" /* webpackChunkName: "casts-list" */
  )
);
const ReviewsList = lazy(() =>
  import(
    "../components/ReviewsList/ReviewsList" /* webpackChunkName: "Reviews-list" */
  )
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    fetchMoviesFullImfo(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/books");
  };

  return (
    <>
      {movie && (
        <>
          <Button location={location} onClick={onGoBack} />
          <MovieСard movie={movie} imgUrl={IMAGE_URL} />

          <div>
            <h2>Additional info</h2>
            <ul>
              <li>
                <NavLink exact to={`${url}/cast`}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>

          <Suspense
            fallback={
              <div className={s.loader}>
                <Loader />
              </div>
            }
          >
            <Switch>
              <Route path={`${path}/cast`} exact>
                <CastsList movieId={movieId} />
              </Route>

              <Route path={`${path}/reviews`} exact>
                <ReviewsList movieId={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
export default MovieDetailsPage;

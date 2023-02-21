import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
} from "../../services/api/movieSlice";
import * as S from "./HomePage.styles";

const HomePage = () => {
	const { data: latestMovies } = useGetLatestMoviesQuery();
	const { data: topMovies } = useGetTopMoviesQuery();
	const [sortBy, setSortBy] = useState("latest");
	const handleOnClick = (value) => {
		setSortBy(value);
	};
	return (
		<>
			<S.HeadersContainer>
				<S.h1>Welcome to LaLa Land</S.h1>
				<br />
			</S.HeadersContainer>

			<S.ButtonsContainer>
				<S.Button
					isSelected={sortBy === "latest"}
					onClick={() => handleOnClick("latest")}
				>
					Latest Movies
				</S.Button>
				<S.Button
					isSelected={sortBy === "top"}
					onClick={() => handleOnClick("top")}
				>
					Top Movies{" "}
				</S.Button>
			</S.ButtonsContainer>
			{sortBy === "latest" && latestMovies && (
				<MovieList movies={latestMovies} />
			)}
			{sortBy === "top" && topMovies && <MovieList movies={topMovies} />}
		</>
	);
};

export default HomePage;

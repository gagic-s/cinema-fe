import { useForm } from "react-hook-form";
import style from "./CreateMoviePage.module.css";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../services/genres/retrieveGenres";
import { createMovie } from "../../services/movies/movie-service";
import { useNavigate } from "react-router-dom";

// Explicitly define the form data structure
type FormValues = {
  name: string;
  originalName: string;
  duration: number;
  genres: string[]; // Genres as an array of strings
};

const CreateMoviePage = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      originalName: "",
      duration: 0,
      genres: [],
    },
  });

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const data = await fetchGenres();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const genreNames = data.map((genre: any) => genre.name);
        setGenres(genreNames);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    getGenres();
  }, []);

  // Handle multiple selections
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions: string[] = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setValue("genres", selectedOptions);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const newMovie = {
      name: data.name,
      originalName: data.originalName,
      duration: data.duration,
      posterImage: "blaAndBla",
      genreNames: data.genres,
    };
    const result = await createMovie(newMovie);
    navigate(`${result.movie_id}/create-screening`);
  };

  return (
    <div className={style.formContainer}>
      <h2>Create Movie Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Movie Name</label>
        <input {...register("name", { required: true, maxLength: 10 })} />
        {errors.name && <p>This field is required</p>}

        <label>Original Movie Name</label>
        <input
          {...register("originalName", { required: true, maxLength: 10 })}
        />
        {errors.originalName && <p>This field is required</p>}

        <label>Movie Duration</label>
        <input {...register("duration")} defaultValue="test" />
        {loading ? (
          <div>Loading ... </div>
        ) : (
          <>
            <label>Genre Selection:</label>
            <select
              className={style.minimal}
              multiple
              value={getValues("genres")}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            {errors.genres && <p>Please select at least one genre</p>}
          </>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateMoviePage;

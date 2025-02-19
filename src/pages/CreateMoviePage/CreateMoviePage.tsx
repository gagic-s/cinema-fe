import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../components/shared/ImageUpload/ImageUpload";
import { getAllGenres } from "../../services/genres/genre-service";
import { createMovie } from "../../services/movies/movie-service";
import Genre from "../../types/Genre";
import { CreateMovieRequest, CreateMovieResponse } from "../../types/Movie";
import style from "./CreateMoviePage.module.css";

type FormValues = {
  name: string;
  originalName: string;
  duration: number;
  genres: string[];
};

const CreateMoviePage = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
        const data = await getAllGenres();
        const genreNames = data.map((genre: Genre) => genre.name);
        setGenres(genreNames);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      } finally {
        setLoading(false);
      }
    };

    getGenres();
  }, []);

  // TODO: fix multiselect
  // Handle multiple selections
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions: string[] = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setValue("genres", selectedOptions);
  };

  const onSubmit = async (data: FormValues) => {
    const newMovie: CreateMovieRequest = {
      name: data.name,
      originalName: data.originalName,
      duration: data.duration,
      genreNames: data.genres,
      poster: file,
    };

    const result: CreateMovieResponse = await createMovie(newMovie);

    // TODO: fix navigation to lead to the same url from both places
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
            {genres}
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
        <div>
          <ImageUpload onImageSelect={(file) => setFile(file)} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateMoviePage;

import { Button } from "./Button";

type GenresArray = Array<{
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}>;

type GenresProps = {
  genres: GenresArray;
  selectedGenreId: number;
  handleClickButton: Function;
};

export default function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: GenresProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

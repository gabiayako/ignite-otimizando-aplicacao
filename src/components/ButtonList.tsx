import { useCallback } from "react";
import { Button } from "./Button";

interface ButtonListProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function ButtonList({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: ButtonListProps) {
  return (
    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => buttonClickCallback(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
}

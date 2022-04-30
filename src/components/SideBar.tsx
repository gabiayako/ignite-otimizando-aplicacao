import { useCallback } from "react";
import { Button } from "./Button";
import { ButtonList } from "./ButtonList";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <ButtonList
        genres={genres}
        selectedGenreId={selectedGenreId}
        buttonClickCallback={buttonClickCallback}
      />
    </nav>
  );
}

import { render, screen } from "@testing-library/react";
import PokemonCard from "../src/PokemonCard";

const pokemon = { name: "Squirtle", height: 5, weight: 90, baseExperience: 63 };

describe("Pokemon props are rendered correctly in the Pokemon Card", () => {
  test("renders Pokemon name correctly", () => {
    render(<PokemonCard {...pokemon} />);
    const name = screen.getByText("Name: SQUIRTLE");
    expect(name).toBeInTheDocument();
  });

  test("renders Pokemon Height correctly", () => {
    render(<PokemonCard {...pokemon} />);
    const height = screen.getByText("Height: 5");
    expect(height).toBeInTheDocument();
  });

  test("renders Pokemon Weight correctly", () => {
    render(<PokemonCard {...pokemon} />);
    const weight = screen.getByText("Weight: 90");
    expect(weight).toBeInTheDocument();
  });

  test("renders Pokemon Base Experience correctly", () => {
    render(<PokemonCard {...pokemon} />);
    const baseExperience = screen.getByText("Base Experience: 63");
    expect(baseExperience).toBeInTheDocument();
  });
});

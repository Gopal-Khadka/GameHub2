import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // for mobile
          lg: `"nav nav" "aside main"`, // 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "150px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <GenreList
              onLinkClick={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;

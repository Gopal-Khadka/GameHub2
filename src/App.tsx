import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformDropDown from "./components/PlatformDropDown";
import SortDropDown from "./components/SortDropDown";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              onLinkClick={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding={10}>
          <HStack marginBottom={5} spacing={3}>
            <PlatformDropDown
              onPlatformClick={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />

            <SortDropDown
              onSortClick={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
              selectedSort={gameQuery.ordering}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;

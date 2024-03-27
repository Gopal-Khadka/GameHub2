# GameHub

A game search and indexing website based on `React` and `Typescript`.

# Procedures

## Installing Chakra UI

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

After installing the Chakra UI library, we need to use it inside `Main.tsx` file of `src` folder.

```tsx
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

Now you can use Chakra component in your component.

## Creating a Responsive Layout

To build responsive navbar layout, we use grid components defined in chakra UI which allows us to show and hide elements at certain breakpoints:

```tsx
import { Grid, GridItem, Show } from "@chakra-ui/react";
<Grid
  templateAreas={{
    base: `"nav" "main"`, // for mobile
    lg: `"nav nav" "aside main"`, // 1024px
  }}
>
  <GridItem area="nav" bg="coral">
    NavBar
  </GridItem>
  <Show above="lg">
    <GridItem area="aside" bg="red">
      Aside
    </GridItem>
  </Show>
  <GridItem area="main" bg="blue">
    Main
  </GridItem>
</Grid>;
```

## Building Navigation Bar

We use `Hstack`, `Image` and `Text` component to build up a simple navbar.

```tsx
<HStack>
  <Image src={logo} boxSize={"60px"} />
  <Text> NavBar</Text>
</HStack>
```

## Implementing Dark Mode

You can refer to [Chakra's color mode](https://chakra-ui.com/docs/styled-system/color-mode) for dark mode implemenation.  
You have to create a them config file called `theme.ts` to store the config object.

```ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
```

Additionally, you have to modify `main.tsx` file to use the config `theme`.

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

## Fetching Games from RAWG API

Go to official website of RAWG and get the apiKey after login of free tier.  
Use axios library to get the games list from API using `apiKey` as `parameter`.  
You can then store that list after cleaning it as `games` state. We are gonna use this data later to create game grid component to show game info.

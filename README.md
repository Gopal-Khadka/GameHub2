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

To build responsive navbar layout, we use [grid components](https://chakra-ui.com/docs/components/grid#template-columns) defined in chakra UI which allows us to show and hide elements at certain breakpoints.  
To learn more about `Chakra Breakpoints`, visit [this](https://chakra-ui.com/docs/styled-system/responsive-styles#customizing-breakpoints).

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

Refer to [Chakra stacks](https://chakra-ui.com/docs/components/stack#stack-items-horizontally), [Chakra Image](https://chakra-ui.com/docs/components/image) and [Chakra Text](https://chakra-ui.com/docs/components/text).

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

Go to official website of [RAWG](https://rawg.io/) and get the apiKey after login of free tier.  
Use axios library to get the games list from API using `apiKey` as `parameter`. You can find docs [here](https://api.rawg.io/docs).  
You can then store that list after cleaning it as `games` state. We are gonna use this data later to create game grid component to show game info.

## Creating Custom Hook For Fetching Games

In this module, we factor our code to separate the component and api-fetch logic to separate files. This declutters our code and implements abstraction in our code since the component doesn't need to know about the API. It just needs the game data. That's all.

So, we created a file named `useGames.ts` which contains our custom hook to fetch the games and return the games list and error.

## Build Game Cards

We use various Chakra UI card components to add responsive game cards in the website. CSS properties like `padding`, `overflow`, `borderRadius` are used to enhance the look of the cards.  
Refer to [Chakra cards](https://chakra-ui.com/docs/components/card) and [Chakra SimpleGrid](https://chakra-ui.com/docs/components/simple-grid#changing-the-spacing-for-columns-and-rows) for more info.

## Displaying Platform Icons

We import necessary icons like `ios`, `linux`, `windows` from `react-icons` and create a icon based on the platform the game has been released on. We use `Hstack` to align all the platform icons horizontally and `Icon` to render the desired platform component.

We use coloring provided by Chakra UI to show the icons a bit darker. Refer to [this](https://chakra-ui.com/docs/styled-system/theme#black--white) for color.

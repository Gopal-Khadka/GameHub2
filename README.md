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

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

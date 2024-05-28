import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import AppRouters from "./features/routers";
import { db } from "./configs/firebase";
import { mergeThemeWithDefaults } from "./theme";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { setTheme } from "./redux/actions/theme";

const App = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  useEffect(() => {
    const getTheme = async () => {
      const docRef = doc(db, "settings", "general");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const isTheme = docSnap.data().theme;
        if (isTheme) {
          const theme = mergeThemeWithDefaults();
          dispatch(setTheme(theme));
        }
        console.log("Document data:", docSnap.data().theme);
      } else {
        console.log("No encontrado el documento del Theme!");
      }
    };
    getTheme();
  });

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AppRouters />
    </ChakraProvider>
  );
};

export default App;

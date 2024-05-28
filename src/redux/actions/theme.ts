import type { Dict } from "@chakra-ui/utils";
import { types } from "../types/types";
import { AppThunk } from "../store";
import { mergeThemeWithDefaults } from "../../theme";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebase";

export const fetchTheme = (): AppThunk => async (dispatch) => {
  try {
    const docRef = doc(db, "settings", "general");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const isTheme = docSnap.data().theme;
      if (isTheme) {
        const mergedTheme = mergeThemeWithDefaults();
        dispatch(setTheme(mergedTheme));
      }
      console.log("Document data:", docSnap.data().theme);
    } else {
      console.log("No encontrado el documento del Theme!");
    }
  } catch (error) {
    console.error("Error fetching theme:", error);
  }
};

export const setTheme = (theme: Dict) => ({
  type: types.theme,
  payload: theme,
});

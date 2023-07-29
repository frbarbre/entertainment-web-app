import { Media } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  bookmarked: Media[];
};

type Actions = {
  addBookmark: (Item: Media) => void;
  removeBookmark: (Item: Media) => void;
};

const INITIAL_STATE = {
  bookmarked: [],
};

const useBookmarkStore = create(
  persist<State & Actions>(
    (set, get) => ({
      bookmarked: INITIAL_STATE.bookmarked,

      addBookmark: (media: Media) => {
        const bookmarked = get().bookmarked;
        const updatedBookmarks = [...bookmarked, { ...media }];
        set({ bookmarked: updatedBookmarks });
      },

      removeBookmark: (media: Media) => {
        set((state) => ({
          bookmarked: state.bookmarked.filter(
            (item) => item.title !== media.title
          ),
        }));
      },
    }),
    {
      name: "bookmark-storage",
      getStorage: () => sessionStorage, // Choose the appropriate storage mechanism (sessionStorage, localStorage, etc.)
    }
  )
);

export default useBookmarkStore;

// const store = (set) => ({
//   succes: false,
//   setSucces: (succes) => set(() => ({ succes: succes })),
// });

// export const useStore = create(store);

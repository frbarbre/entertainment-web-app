"use client";

import { data } from "@/data";
import useBookmarkStore from "./store";
import { nanoid } from "nanoid";

export default function Home() {
  const addBookmark = useBookmarkStore((state) => state.addBookmark);
  const removeBookmark = useBookmarkStore((state) => state.removeBookmark);
  const bookmarks = useBookmarkStore((state) => state.bookmarked);

  return (
    <main className="flex">
      <div>
        {data.map((tv) => (
          <div>
            <h1 key={nanoid()} onClick={() => addBookmark(tv)}>
              {tv.title}
            </h1>
            <img src={tv.thumbnail.regular.large} alt="" />
          </div>
        ))}
      </div>
      <div>
        {bookmarks.map((bookmark) => (
          <h1 onClick={() => removeBookmark(bookmark)} key={nanoid()}>
            {bookmark.title}
          </h1>
        ))}
      </div>
    </main>
  );
}

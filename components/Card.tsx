import useBookmarkStore from "@/app/store";
import { Media } from "@/types";
import BookmarkButton from "./BookmarkButton";
import Image from "next/image";
import CardInfo from "./CardInfo";

type Props = {
  data: Media;
  isTrending?: boolean;
};

export default function Card({ data, isTrending }: Props) {
  const addBookmark = useBookmarkStore((state) => state.addBookmark);
  const removeBookmark = useBookmarkStore((state) => state.removeBookmark);
  const bookmarks = useBookmarkStore((state) => state.bookmarked);

  const isBookmarked = bookmarks.find((mark) => mark.title === data.title);

  function handleClick() {
    if (isBookmarked) {
      removeBookmark(data);
    } else {
      addBookmark(data);
    }
  }

  return (
    <div className="relative w-max">
      <div
        className={`absolute top-[16px] ${
          isTrending ? "right-[24px]" : "right-[16px]"
        }`}
      >
        <BookmarkButton isBookmarked={isBookmarked} handleClick={handleClick} />
      </div>
      <Image
        src={
          isTrending
            ? (data.thumbnail.trending?.large as string)
            : data.thumbnail.regular.large
        }
        height={isTrending ? 230 : 174}
        width={isTrending ? 470 : 280}
        alt={data.title}
        className={`${
          isTrending
            ? "md:w-[470px] w-[240px] h-[140px] md:h-[230px] max-w-none"
            : "w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
        } object-cover rounded-[8px]`}
      />
      <div
        className={`${
          isTrending ? "absolute bottom-[24px] left-[24px] text-white" : ""
        }`}
      >
        <CardInfo data={data} isTrending={isTrending} />
      </div>
    </div>
  );
}

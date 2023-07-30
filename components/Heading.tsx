export default function Heading({
  text,
  padding,
}: {
  text: string;
  padding?: string;
}) {
  return (
    <h2
      className={`${
        padding ? padding : "py-[24px] md:pt-[48px] lg:pt-[40px] lg:pb-[38px]"
      } font-light text-[20px] tracking-[-0.31px] md:text-[32px] md:tracking-[-0.5px]`}
    >
      {text}
    </h2>
  );
}

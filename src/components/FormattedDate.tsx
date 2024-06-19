import { format, parseISO } from "date-fns";

export const FormattedDate = ({
  date,
  slug,
}: {
  date: string;
  slug: string;
}) => {
  try {
    const formatted = format(parseISO(date), "yyyy-MM-dd");
    return (
      <time
        className="font-mono"
        dateTime={format(parseISO(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
      >
        {formatted}
      </time>
    );
  } catch (error) {
    console.error(`Error formatting date for post ${slug}: ${error}`);
    return null;
  }
};

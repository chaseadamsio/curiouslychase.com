import { format, parseISO } from "date-fns";

export const FormattedDate = ({ date }: { date: string }) => (
  <time
    className="font-mono"
    dateTime={format(parseISO(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
  >
    {format(parseISO(date), "yyyy-MM-dd")}
  </time>
);

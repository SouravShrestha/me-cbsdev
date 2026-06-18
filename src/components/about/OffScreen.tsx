import { about } from "@/lib/about";
import SectionHeading from "./SectionHeading";

export default function OffScreen() {
  const { number, label, title, spotifyUrl, chessUrl, chessHandle } =
    about.offScreen;

  return (
    <section>
      <SectionHeading
        number={number}
        label={label}
        separatorClassName="text-accent/70"
      />
      <h2 className="mt-6 text-2xl font-medium text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-base text-zinc-600 dark:text-zinc-400 leading-7">
        <p>
          When I&apos;m not coding, you&apos;ll probably find me on a badminton
          court trying to convince myself that cardio is fun.
        </p>
        <p>
          I&apos;m also usually listening to music on{" "}
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-green-600"
          >
            Spotify
          </a>{" "}
          and learning how to play chess. I&apos;m a complete beginner, so if
          you&apos;re patient enough to teach me a thing or two, feel free to
          challenge me on chess.com as{" "}
          <a
            href={chessUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:text-accent-hover"
          >
            {chessHandle}.
          </a>
        </p>
      </div>
    </section>
  );
}

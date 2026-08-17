import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Headphones, Mic, Volume2, Music, Globe, Check } from "lucide-react";
import bg from "@/assets/session-bg.jpg";

const USERNAME = "TeynnoShark";
const UUID = "a6baa57f-b245-330d-8328-ccca5a2eb031";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OpenAudioMc Session — Connect your game audio" },
      {
        name: "description",
        content:
          "Start your OpenAudioMc session: choose audio only or audio with voice chat and immerse yourself in in-game spatial sound.",
      },
      { property: "og:title", content: "OpenAudioMc Session — Connect your game audio" },
      {
        property: "og:description",
        content:
          "Start your OpenAudioMc session: choose audio only or audio with voice chat and immerse yourself in in-game spatial sound.",
      },
    ],
  }),
  component: Index,
});

const perks = [
  "Audio that moves with your actions in-game",
  "No resourcepack or downloads required",
  "Choose your way of connecting, and then simply leave this tab open in the background",
];

function Index() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <img
        src={bg}
        alt=""
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />

      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 py-20 pb-28 lg:flex-row lg:items-center lg:gap-20">
        <section className="max-w-md">
          <img
            src={`https://visage.surgeplay.com/bust/512/${UUID}`}
            alt={`${USERNAME} Minecraft skin`}
            width={192}
            height={192}
            className="mb-8 h-48 w-48 rounded-full border-2 border-primary/70 bg-black/30 object-cover shadow-glow"
          />
          <h1 className="text-4xl font-normal tracking-tight text-foreground">
            Welcome back, {USERNAME}!
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Are you trying to login as <em className="text-foreground/80">{USERNAME}</em>?
            <br />
            If you are not, please close this window.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Connect your game audio experience and immerse yourself in a whole new dimension of
            gameplay.
          </p>
        </section>

        <section className="w-full max-w-xl rounded-xl border border-primary/60 bg-card/80 p-8 shadow-panel backdrop-blur-sm">
          <h2 className="text-2xl font-normal text-foreground">Connect to Audio</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Choose how you'd like to experience audio in the game:
          </p>

          <div className="mt-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary shadow-glow">
                <Headphones className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg text-foreground">Audio Only</h3>
                <p className="text-sm text-muted-foreground">
                  Connect in audio mode, letting you hear speakers and regions
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-primary py-3.5 text-base text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Volume2 className="h-5 w-5" />
              Start audio session
            </button>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent shadow-glow-accent">
                <Mic className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg text-foreground">Audio + Voice Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Full immersive experience with voice communication
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate({ to: "/voice" })}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-accent py-3.5 text-base text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Music className="h-5 w-5" />
              Start session with VoiceChat
            </button>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h4 className="text-sm font-semibold text-foreground">Enhanced Audio Experience</h4>
            <ul className="mt-4 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="absolute inset-x-0 bottom-0 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 text-xs text-muted-foreground">
          <span>© OpenAudioMc 2016-2025. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <a
              href="https://openaudiomc.net/docs/client_major_changelog"
              className="font-mono text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Version 369 <span className="text-xs text-muted-foreground">(Up to date)</span>
            </a>
            <a
              href="https://openaudiomc.net/"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Globe className="h-3.5 w-3.5" />
              Website
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

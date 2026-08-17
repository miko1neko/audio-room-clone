import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  Mic,
  Volume2,
  PictureInPicture2,
  AudioLines,
  UserRoundSearch,
  Settings,
  Users,
  Map,
  Radio,
  UserPlus,
  Music,
  Globe,
} from "lucide-react";
import bg from "@/assets/session-bg.jpg";

const UUID = "a6baa57f-b245-330d-8328-ccca5a2eb031";

export const Route = createFileRoute("/voice")({
  head: () => ({
    meta: [
      { title: "Voice Chat Session — OpenAudioMc" },
      {
        name: "description",
        content:
          "Manage your OpenAudioMc voice chat session: microphone status, voice volume, devices and activation settings.",
      },
      { property: "og:title", content: "Voice Chat Session — OpenAudioMc" },
      {
        property: "og:description",
        content:
          "Manage your OpenAudioMc voice chat session: microphone status, voice volume, devices and activation settings.",
      },
    ],
  }),
  component: VoiceSession,
});

const railItems = [
  { icon: AudioLines, active: false },
  { icon: UserRoundSearch, active: true },
  { icon: Settings, active: false },
];

const hints = [
  {
    icon: Map,
    title: "Get closer to other players",
    body: "Voice chat is proximity based. Find and walk up to other players!",
  },
  {
    icon: Radio,
    title: "Join a Voice Channel",
    body: "Browse available voice channels and join one to start talking",
  },
  {
    icon: UserPlus,
    title: "Invite your friends",
    body: "Tell others about voice chat — maybe they haven't enabled it yet!",
  },
];

function VoiceSession() {
  const [volume, setVolume] = useState(100);

  return (
    <div className="relative flex min-h-screen bg-background">
      <img
        src={bg}
        alt=""
        width={1920}
        height={1088}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />

      {/* Icon rail */}
      <aside className="relative z-10 flex w-[76px] shrink-0 flex-col items-center justify-between border-r border-border bg-background/95 py-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground">
          <Menu className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-6">
          {railItems.map(({ icon: Icon, active }, i) => (
            <button
              key={i}
              type="button"
              className={
                active
                  ? "flex h-13 w-13 items-center justify-center rounded-full border-2 border-primary bg-primary/20 p-3 text-primary shadow-glow"
                  : "flex h-13 w-13 items-center justify-center rounded-full bg-secondary p-3 text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
        <img
          src={`https://visage.surgeplay.com/face/64/${UUID}`}
          alt="Your skin"
          width={40}
          height={40}
          className="h-10 w-10 rounded-md"
        />
      </aside>

      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">
        {/* Left panels */}
        <div className="w-full space-y-4 overflow-y-auto p-4 lg:max-w-[420px]">
          <section className="rounded-xl border border-accent/30 bg-card/85 p-6 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <img
                src={`https://visage.surgeplay.com/face/128/${UUID}`}
                alt="Your skin"
                width={80}
                height={80}
                className="h-20 w-20 rounded-md border border-border"
              />
              <p className="mt-4 text-sm text-foreground">Your microphone status</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[Mic, Volume2, PictureInPicture2].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex h-14 items-center justify-center rounded-md border border-primary/60 bg-primary/15 text-primary transition-colors hover:bg-primary/25"
                >
                  <Icon className="h-6 w-6" />
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-border bg-secondary/60 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/20 text-primary">
                  <Volume2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Voice Volume</p>
                  <p className="text-xs text-muted-foreground">{volume}%</p>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={120}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Voice volume"
                className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
                style={{
                  background: `linear-gradient(to right, oklch(0.7 0.15 250) 0%, var(--primary) ${(volume / 120) * 100}%, var(--secondary) ${(volume / 120) * 100}%)`,
                }}
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>100%</span>
                <span>120%</span>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card/85 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <Settings className="h-5 w-5" />
              </span>
              <h2 className="text-xl text-foreground">Voice Settings</h2>
            </div>

            <div className="mt-5 rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/20 text-accent">
                  <Mic className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Microphone Device</p>
                  <p className="text-xs text-muted-foreground">Select which microphone to use</p>
                </div>
              </div>
              <select
                aria-label="Microphone device"
                className="mt-4 w-full truncate rounded-md border border-primary/50 bg-primary/15 px-3 py-2.5 text-sm text-foreground outline-none"
              >
                <option>Default - Microphone</option>
                <option>Headset Microphone</option>
              </select>
            </div>

            <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/20 text-primary">
                  <Music className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Microphone Activation</p>
                  <p className="text-xs text-muted-foreground">
                    Configure when your microphone activates
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Main area */}
        <main className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-xl text-center">
            <Users className="mx-auto h-12 w-12 text-destructive/80" />
            <h1 className="mt-6 text-3xl text-foreground">Looking for someone?</h1>
            <p className="mt-3 text-base text-muted-foreground">
              Voice chat is more fun together! Here's how you can meet others:
            </p>

            <div className="mt-8 space-y-4 text-left">
              {hints.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-lg border border-primary/60 bg-card/80 p-5 backdrop-blur-sm transition-colors hover:bg-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center justify-end gap-4 px-6 py-3 text-xs text-muted-foreground">
        <span className="font-mono text-sm text-foreground/80">Version 369</span>
        <span>© OpenAudioMc 2016-2025. All Rights Reserved.</span>
        <a
          href="https://openaudiomc.net/"
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Globe className="h-3.5 w-3.5" />
          Website
        </a>
      </footer>
    </div>
  );
}

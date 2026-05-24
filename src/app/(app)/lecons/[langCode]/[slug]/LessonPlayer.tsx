"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mic,
  RotateCcw,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import type { LessonContent } from "@/lib/lessons";

type Props = {
  languageName: string;
  languageEmoji: string;
  lessonTitle: string;
  lessonSlug: string;
  content: LessonContent;
};

type Step = "intro" | "vocab" | "quiz" | "pronunciation" | "done";

const STEPS: Step[] = ["intro", "vocab", "quiz", "pronunciation", "done"];

export function LessonPlayer(props: Props) {
  const [step, setStep] = useState<Step>("intro");
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [persisted, setPersisted] = useState(false);

  const progress = ((STEPS.indexOf(step) + 1) / STEPS.length) * 100;

  useEffect(() => {
    if (step === "done" && !persisted) {
      fetch("/api/lessons/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonSlug: props.lessonSlug,
          languageName: props.languageName,
          score: score.total === 0 ? 100 : Math.round((score.correct / score.total) * 100),
          completed: true,
        }),
      })
        .then(() => setPersisted(true))
        .catch(() => undefined);
    }
  }, [step, persisted, props.lessonSlug, props.languageName, score]);

  function next() {
    const i = STEPS.indexOf(step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1]);
  }

  function restart() {
    setStep("intro");
    setScore({ correct: 0, total: 0 });
    setPersisted(false);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          href="/lecons"
          className="text-xs text-muted hover:text-gold-400"
        >
          ← Toutes les leçons
        </Link>
        <h1 className="mt-2 flex items-center gap-2 text-3xl font-extrabold sm:text-4xl">
          <span>{props.languageEmoji}</span>
          {props.lessonTitle}
        </h1>
        <p className="text-sm text-muted">{props.languageName}</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-elevated">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-400 to-african-orange transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === "intro" && (
        <IntroStep
          intro={props.content.intro}
          vocabCount={props.content.vocab.length}
          quizCount={props.content.quiz.length}
          pronunciationCount={props.content.pronunciation.length}
          onNext={next}
        />
      )}
      {step === "vocab" && (
        <VocabStep
          items={props.content.vocab}
          speechLang={props.content.speechLang}
          onNext={next}
        />
      )}
      {step === "quiz" && (
        <QuizStep
          items={props.content.quiz}
          onComplete={(correct, total) => {
            setScore({ correct, total });
            next();
          }}
        />
      )}
      {step === "pronunciation" && (
        <PronunciationStep
          items={props.content.pronunciation}
          speechLang={props.content.speechLang}
          onNext={next}
        />
      )}
      {step === "done" && (
        <DoneStep
          languageName={props.languageName}
          score={score}
          onRestart={restart}
        />
      )}
    </div>
  );
}

function IntroStep({
  intro,
  vocabCount,
  quizCount,
  pronunciationCount,
  onNext,
}: {
  intro: string;
  vocabCount: number;
  quizCount: number;
  pronunciationCount: number;
  onNext: () => void;
}) {
  return (
    <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-700 via-primary-900 to-background p-8">
      <div className="absolute inset-0 -z-10 pattern-kente opacity-20" />
      <h2 className="text-xl font-bold">Avant de commencer</h2>
      <p className="mt-3 text-foreground/85">{intro}</p>
      <ul className="mt-5 grid gap-2 text-sm text-foreground/80 sm:grid-cols-3">
        <li className="rounded-xl bg-background/40 px-3 py-2">
          📚 {vocabCount} mots
        </li>
        <li className="rounded-xl bg-background/40 px-3 py-2">
          ✅ {quizCount} questions
        </li>
        <li className="rounded-xl bg-background/40 px-3 py-2">
          🎤 {pronunciationCount} prononciations
        </li>
      </ul>
      <button
        onClick={onNext}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-[#1a0f00]"
      >
        Commencer <ArrowRight size={14} />
      </button>
    </div>
  );
}

function speak(text: string, lang = "fr-FR") {
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

function VocabStep({
  items,
  speechLang,
  onNext,
}: {
  items: LessonContent["vocab"];
  speechLang: string;
  onNext: () => void;
}) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const item = items[i];

  function go(delta: number) {
    setFlipped(false);
    setI((v) => Math.max(0, Math.min(items.length - 1, v + delta)));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          Vocabulaire · {i + 1} / {items.length}
        </span>
        <button
          onClick={() => speak(item.native, speechLang)}
          className="inline-flex items-center gap-1 text-gold-400 hover:underline"
        >
          <Volume2 size={14} /> Écouter
        </button>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="relative w-full overflow-hidden rounded-3xl border border-gold-500/40 bg-gradient-to-br from-primary-700 to-primary-900 p-12 text-center transition hover:border-gold-500/70"
      >
        <div className="absolute inset-0 pattern-kente opacity-20" />
        <div className="relative">
          {flipped ? (
            <>
              <p className="text-3xl font-bold text-foreground/90 sm:text-4xl">
                {item.french}
              </p>
              <p className="mt-2 text-sm text-muted">Tape pour revoir</p>
            </>
          ) : (
            <>
              <p className="text-4xl font-extrabold text-gradient-gold sm:text-5xl">
                {item.native}
              </p>
              {item.pronunciation && (
                <p className="mt-2 text-sm italic text-muted">
                  /{item.pronunciation}/
                </p>
              )}
              <p className="mt-4 text-sm text-muted">Tape pour la traduction</p>
            </>
          )}
        </div>
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => go(-1)}
          disabled={i === 0}
          className="flex-1 rounded-full border border-border bg-surface-elevated py-2.5 text-sm font-semibold disabled:opacity-40"
        >
          Précédent
        </button>
        {i < items.length - 1 ? (
          <button
            onClick={() => go(1)}
            className="flex-1 rounded-full bg-primary-600 py-2.5 text-sm font-semibold text-foreground"
          >
            Suivant
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex-1 rounded-full bg-gold-500 py-2.5 text-sm font-bold text-[#1a0f00]"
          >
            Passer au quiz →
          </button>
        )}
      </div>
    </div>
  );
}

function QuizStep({
  items,
  onComplete,
}: {
  items: LessonContent["quiz"];
  onComplete: (correct: number, total: number) => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const item = items[i];

  function pick(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === item.correctIndex) setCorrect((c) => c + 1);
  }

  function nextQ() {
    if (i === items.length - 1) {
      onComplete(correct, items.length);
    } else {
      setI((v) => v + 1);
      setPicked(null);
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-surface-elevated p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between text-xs text-muted">
        <span>
          Quiz · {i + 1} / {items.length}
        </span>
        <span className="font-semibold text-gold-400">
          Score : {correct} / {items.length}
        </span>
      </div>
      <h2 className="text-xl font-bold sm:text-2xl">{item.question}</h2>
      <ul className="mt-6 space-y-2">
        {item.options.map((opt, idx) => {
          const isCorrect = picked !== null && idx === item.correctIndex;
          const isWrong =
            picked !== null && idx === picked && idx !== item.correctIndex;
          return (
            <li key={opt}>
              <button
                onClick={() => pick(idx)}
                disabled={picked !== null}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                  isCorrect
                    ? "border-african-green bg-african-green/20 text-foreground"
                    : isWrong
                      ? "border-african-red bg-african-red/20 text-foreground"
                      : "border-border bg-background/40 hover:border-gold-500/50"
                }`}
              >
                <span>{opt}</span>
                {isCorrect && <Check size={16} className="text-african-green" />}
                {isWrong && <X size={16} className="text-african-red" />}
              </button>
            </li>
          );
        })}
      </ul>
      {picked !== null && (
        <div className="mt-4 rounded-xl bg-background/60 p-3 text-sm">
          {picked === item.correctIndex ? (
            <p className="text-african-green">
              ✓ Bonne réponse ! {item.explanation ?? ""}
            </p>
          ) : (
            <p className="text-african-red">
              ✗ La bonne réponse est «{" "}
              <strong className="text-gold-400">
                {item.options[item.correctIndex]}
              </strong>{" "}
              ». {item.explanation ?? ""}
            </p>
          )}
          <button
            onClick={nextQ}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-[#1a0f00]"
          >
            {i === items.length - 1 ? "Voir mes résultats" : "Question suivante"}{" "}
            <ArrowRight size={12} />
          </button>
        </div>
      )}
    </div>
  );
}

function PronunciationStep({
  items,
  speechLang,
  onNext,
}: {
  items: LessonContent["pronunciation"];
  speechLang: string;
  onNext: () => void;
}) {
  const [i, setI] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<null | {
    kind: "good" | "ok" | "bad";
    text: string;
  }>(null);
  const item = items[i];

  const recognition = useMemo(() => {
    if (typeof window === "undefined") return null;
    const SR =
      (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition })
        .SpeechRecognition ??
      (window as unknown as {
        webkitSpeechRecognition?: typeof window.SpeechRecognition;
      }).webkitSpeechRecognition;
    if (!SR) return null;
    const r = new SR();
    r.lang = speechLang;
    r.continuous = false;
    r.interimResults = false;
    return r;
  }, [speechLang]);

  const supportsSpeech = recognition !== null;

  function score(target: string, said: string) {
    const norm = (s: string) =>
      s
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^\p{L}\s]/gu, "")
        .trim();
    const a = norm(target);
    const b = norm(said);
    if (a === b) return 1;
    // simple word-overlap heuristic
    const wa = a.split(/\s+/);
    const wb = b.split(/\s+/);
    const hit = wa.filter((w) => wb.includes(w)).length;
    return wa.length === 0 ? 0 : hit / wa.length;
  }

  function start() {
    if (!recognition) return;
    setTranscript(null);
    setFeedback(null);
    setRecording(true);
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const said = e.results[0]?.[0]?.transcript ?? "";
      setTranscript(said);
      const s = score(item.phrase, said);
      if (s >= 0.8)
        setFeedback({ kind: "good", text: "Excellent ! 🎉" });
      else if (s >= 0.5)
        setFeedback({ kind: "ok", text: "Pas mal — réessaie pour viser parfait." });
      else
        setFeedback({
          kind: "bad",
          text: "Pas tout à fait. Écoute le modèle puis répète.",
        });
    };
    recognition.onerror = () => setRecording(false);
    recognition.onend = () => setRecording(false);
    recognition.start();
  }

  function nextItem() {
    setTranscript(null);
    setFeedback(null);
    if (i === items.length - 1) onNext();
    else setI((v) => v + 1);
  }

  return (
    <div className="space-y-4">
      <div className="text-xs text-muted">
        Prononciation · {i + 1} / {items.length}
      </div>
      <div className="rounded-3xl border border-border bg-surface-elevated p-8 text-center">
        <p className="text-3xl font-extrabold text-gradient-gold sm:text-4xl">
          {item.phrase}
        </p>
        <p className="mt-2 text-sm text-muted">{item.french}</p>
        {item.hint && (
          <p className="mt-2 text-xs italic text-muted">💡 {item.hint}</p>
        )}

        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            onClick={() => speak(item.phrase, speechLang)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/85 hover:border-gold-500/60"
          >
            <Volume2 size={14} /> Écouter le modèle
          </button>

          {supportsSpeech ? (
            <button
              onClick={start}
              disabled={recording}
              className="group grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-[#1a0f00] shadow-xl shadow-gold-500/30 transition hover:scale-105 disabled:opacity-60"
            >
              <Mic
                size={36}
                className={recording ? "animate-pulse" : ""}
                strokeWidth={2.4}
              />
            </button>
          ) : (
            <p className="mt-4 max-w-md rounded-xl border border-border bg-background/40 p-3 text-xs text-muted">
              Ton navigateur ne supporte pas la reconnaissance vocale. Essaie Chrome
              ou Safari sur mobile pour l&apos;exercice oral.
            </p>
          )}

          {transcript && (
            <p className="text-xs text-muted">
              Tu as dit : « <span className="text-foreground">{transcript}</span> »
            </p>
          )}
          {feedback && (
            <p
              className={`text-sm font-semibold ${
                feedback.kind === "good"
                  ? "text-african-green"
                  : feedback.kind === "ok"
                    ? "text-gold-400"
                    : "text-african-red"
              }`}
            >
              {feedback.text}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        {supportsSpeech && transcript && (
          <button
            onClick={start}
            className="flex-1 rounded-full border border-border bg-surface-elevated py-2.5 text-sm font-semibold"
          >
            <RotateCcw size={14} className="mr-1 inline" /> Réessayer
          </button>
        )}
        <button
          onClick={nextItem}
          className="flex-1 rounded-full bg-gold-500 py-2.5 text-sm font-bold text-[#1a0f00]"
        >
          {i === items.length - 1 ? "Terminer la leçon" : "Suivant"} →
        </button>
      </div>
    </div>
  );
}

function DoneStep({
  languageName,
  score,
  onRestart,
}: {
  languageName: string;
  score: { correct: number; total: number };
  onRestart: () => void;
}) {
  const pct =
    score.total === 0 ? 100 : Math.round((score.correct / score.total) * 100);
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-gold-500/60 bg-gradient-to-br from-primary-800 via-primary-900 to-background p-10 text-center">
      <div className="absolute inset-0 pattern-kente opacity-20" />
      <div className="relative">
        <Sparkles size={40} className="mx-auto text-gold-400" />
        <h2 className="mt-4 text-3xl font-extrabold">
          Bravo ! Leçon terminée 🎉
        </h2>
        <p className="mt-2 text-foreground/80">
          Tu as gagné{" "}
          <span className="font-bold text-gold-400">+50 XP</span> en{" "}
          {languageName}.
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-background/40 px-4 py-2 text-sm">
          Score quiz :{" "}
          <span className="font-bold text-gold-400">
            {score.correct} / {score.total} ({pct}%)
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onRestart}
            className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-semibold"
          >
            Refaire la leçon
          </button>
          <Link
            href="/lecons"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-[#1a0f00]"
          >
            Choisir une autre leçon
          </Link>
        </div>
      </div>
    </div>
  );
}

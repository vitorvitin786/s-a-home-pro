import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle, X } from "lucide-react";
import { serviceOptions } from "@/lib/site";
import { submitLead } from "@/lib/leads";

type Details = {
  service: string;
  name: string;
  contact: string;
  zip: string;
  date: string;
  time: string;
  description: string;
};

const emptyDetails: Details = {
  service: "",
  name: "",
  contact: "",
  zip: "",
  date: "",
  time: "",
  description: "",
};

const prompts = [
  "What type of project are you planning?",
  "What name should we use?",
  "What phone number or email should we contact?",
  "What ZIP code is the project in?",
  "What day and time would you prefer?",
  "Briefly tell us what you’d like done.",
] as const;

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validContact(value: string) {
  const trimmed = value.trim();
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  const digits = trimmed.replace(/\D/g, "");
  return looksLikeEmail || digits.length >= 10;
}

export function SchedulingAssistant() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [value, setValue] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const today = useMemo(getToday, []);

  const history = [
    details.service,
    details.name,
    details.contact,
    details.zip,
    details.date && `${details.date}${details.time ? ` at ${details.time}` : ""}`,
    details.description,
  ];

  function advance(field: keyof Details, nextValue: string) {
    const trimmed = nextValue.trim();
    if (!trimmed) return;

    if (field === "contact" && !validContact(trimmed)) {
      setError("Enter a valid phone number or email address.");
      return;
    }

    if (field === "zip" && !/^\d{5}$/.test(trimmed)) {
      setError("Enter a valid 5-digit ZIP code.");
      return;
    }

    setError("");
    setDetails((current) => ({ ...current, [field]: trimmed }));
    setValue("");
    setStep((current) => current + 1);
  }

  async function finish() {
    if (!value.trim()) return;
    const complete = { ...details, description: value.trim() };
    setDetails(complete);
    setSending(true);
    setError("");
    try {
      const form = new FormData();
      Object.entries(complete).forEach(([key, item]) => form.set(key, item));
      form.set("request_type", "Scheduling assistant appointment request");
      form.set("confirmation_status", "Requested — manual confirmation required");
      await submitLead(form);
      setSent(true);
    } catch {
      setError("I couldn’t send that yet. Please use the main estimate form or call us.");
    } finally {
      setSending(false);
    }
  }

  function reset() {
    setStep(0);
    setDetails(emptyDetails);
    setValue("");
    setSent(false);
    setError("");
  }

  return (
    <div className="fixed bottom-24 right-4 z-[70] md:bottom-6 md:right-6">
      {open && (
        <section
          aria-label="Project scheduling assistant"
          className="mb-3 flex h-[min(620px,72vh)] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden border border-white/20 bg-[#111214] text-white shadow-2xl"
        >
          <header className="flex items-center justify-between border-b border-white/15 px-5 py-4">
            <div>
              <p className="font-display text-lg font-semibold">Project Assistant</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Appointments are confirmed manually
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="grid size-10 place-items-center border border-white/15"
            >
              <X className="size-4" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-5 text-sm">
            <div className="max-w-[88%] border border-white/10 bg-white/5 p-3 text-white/85">
              Hi—I'll collect the project details and your preferred appointment time. Our team will
              contact you to confirm it.
            </div>
            {history.slice(0, step).map((answer, index) => (
              <div key={`${index}-${answer}`} className="space-y-2">
                <div className="max-w-[88%] border border-white/10 bg-white/5 p-3 text-white/85">
                  {prompts[index]}
                </div>
                <div className="ml-auto max-w-[88%] bg-white p-3 text-black">{answer}</div>
              </div>
            ))}

            {sent ? (
              <div className="border border-white/20 bg-white/5 p-5 text-center">
                <CheckCircle2 className="mx-auto size-9" />
                <h2 className="mt-3 text-xl">Request received</h2>
                <p className="mt-2 text-white/65">
                  Your requested time is not booked yet. We’ll contact you to confirm availability.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-widest"
                >
                  Start another request
                </button>
              </div>
            ) : (
              <div className="border border-white/15 p-4">
                <p className="mb-3 font-medium">{prompts[step]}</p>
                {step === 0 ? (
                  <div className="grid max-h-72 gap-2 overflow-y-auto pr-1">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => advance("service", service)}
                        className="border border-white/20 px-3 py-2 text-left hover:bg-white hover:text-black"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                ) : step === 4 ? (
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      min={today}
                      value={details.date}
                      onChange={(event) => {
                        setError("");
                        setDetails((current) => ({ ...current, date: event.target.value }));
                      }}
                      className="min-w-0 border border-white/20 bg-transparent p-3 [color-scheme:dark]"
                      aria-label="Preferred date"
                    />
                    <input
                      type="time"
                      value={details.time}
                      onChange={(event) => {
                        setError("");
                        setDetails((current) => ({ ...current, time: event.target.value }));
                      }}
                      className="min-w-0 border border-white/20 bg-transparent p-3 [color-scheme:dark]"
                      aria-label="Preferred time"
                    />
                    <button
                      type="button"
                      disabled={!details.date || !details.time}
                      onClick={() => {
                        setError("");
                        setStep(5);
                      }}
                      className="col-span-2 flex items-center justify-center gap-2 bg-white px-4 py-3 font-bold uppercase tracking-wide text-black disabled:opacity-40"
                    >
                      Continue <ArrowRight className="size-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    {step === 5 ? (
                      <textarea
                        value={value}
                        onChange={(event) => {
                          setError("");
                          setValue(event.target.value);
                        }}
                        rows={3}
                        placeholder="Project details"
                        className="min-w-0 flex-1 resize-none border border-white/20 bg-transparent p-3 outline-none focus:border-white"
                      />
                    ) : (
                      <input
                        value={value}
                        onChange={(event) => {
                          setError("");
                          setValue(event.target.value);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            const fields: (keyof Details)[] = ["service", "name", "contact", "zip"];
                            advance(fields[step], value);
                          }
                        }}
                        inputMode={step === 2 ? "tel" : step === 3 ? "numeric" : "text"}
                        maxLength={step === 3 ? 5 : undefined}
                        placeholder={
                          step === 2
                            ? "Phone or email"
                            : step === 3
                              ? "5-digit ZIP"
                              : "Type your answer"
                        }
                        className="min-w-0 flex-1 border border-white/20 bg-transparent p-3 outline-none focus:border-white"
                      />
                    )}
                    <button
                      type="button"
                      disabled={!value.trim() || sending}
                      onClick={() => {
                        if (step === 5) void finish();
                        else {
                          const fields: (keyof Details)[] = ["service", "name", "contact", "zip"];
                          advance(fields[step], value);
                        }
                      }}
                      aria-label={step === 5 ? "Send appointment request" : "Continue"}
                      className="grid w-12 shrink-0 place-items-center bg-white text-black disabled:opacity-40"
                    >
                      {step === 5 ? (
                        <CalendarDays className="size-5" />
                      ) : (
                        <ArrowRight className="size-5" />
                      )}
                    </button>
                  </div>
                )}
                {error && (
                  <p role="alert" className="mt-3 text-sm text-red-300">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Close scheduling assistant" : "Open scheduling assistant"}
        className="ml-auto flex h-14 items-center gap-3 border border-white/25 bg-white px-5 font-bold uppercase tracking-wide text-black shadow-2xl hover:bg-neutral-200"
      >
        <MessageCircle className="size-5" /> <span>{open ? "Close" : "Schedule"}</span>
      </button>
    </div>
  );
}

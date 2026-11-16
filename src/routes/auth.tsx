import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Owner Sign In | S&A Homes Services" },
      { name: "description", content: "Private sign-in for the S&A Homes Services lead dashboard." },
      { property: "og:title", content: "Owner Sign In | S&A Homes Services" },
      { property: "og:description", content: "Private sign-in for the S&A Homes Services lead dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

const field =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
      else navigate({ to: "/leads" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/leads` },
      });
      setMsg(error ? error.message : "Check your email to confirm your account, then sign in.");
    }
    setBusy(false);
  }

  async function google() {
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (r.error) setMsg("Google sign-in failed.");
    else if (!r.redirected) navigate({ to: "/leads" });
  }

  return (
    <section className="section">
      <div className="container-x max-w-md">
        <h1 className="text-3xl">{mode === "in" ? "Owner sign in" : "Create owner account"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Private access to your estimate requests.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className={field} type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={field} type="password" required minLength={8} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={busy}>
            {mode === "in" ? "Sign in" : "Create account"}
          </Button>
        </form>
        <Button type="button" variant="outline" size="lg" className="mt-3 w-full" onClick={google}>
          Continue with Google
        </Button>
        {msg && <p role="alert" className="mt-4 text-sm">{msg}</p>}
        <button type="button" className="mt-4 text-sm text-primary underline" onClick={() => setMode(mode === "in" ? "up" : "in")}>
          {mode === "in" ? "First time? Create your account" : "Already have an account? Sign in"}
        </button>
      </div>
    </section>
  );
}

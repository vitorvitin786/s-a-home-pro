import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export const Route = createFileRoute("/_authenticated/leads")({
  head: () => ({
    meta: [
      { title: "Lead Dashboard | S&A Homes Services" },
      { name: "description", content: "Private dashboard for reviewing estimate requests." },
      { property: "og:title", content: "Lead Dashboard | S&A Homes Services" },
      { property: "og:description", content: "Private dashboard for reviewing estimate requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Leads,
});

type Lead = Tables<"estimate_requests">;
const STATUSES = ["new", "contacted", "estimate scheduled", "quoted", "won", "lost"] as const;
const field =
  "rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary";

function Leads() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [saveError, setSaveError] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const {
    data: isAdmin,
    isLoading: checkingAccess,
    error: accessError,
  } = useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Please sign in again.");
      const { data, error } = await supabase.rpc("has_role", {
        _user_id: u.user.id,
        _role: "admin",
      });
      if (error) throw error;
      return !!data;
    },
  });
  const {
    data: leads = [],
    isLoading,
    error: leadsError,
  } = useQuery({
    queryKey: ["leads"],
    enabled: isAdmin === true,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("estimate_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return leads.filter(
      (l) =>
        (status === "all" || l.status === status) &&
        (!q ||
          [l.full_name, l.phone, l.email, l.zip, l.service, l.address].some((v) =>
            v.toLowerCase().includes(q),
          )),
    );
  }, [leads, search, status]);

  async function update(id: string, patch: Partial<Pick<Lead, "status" | "notes">>) {
    setSaveError("");
    const { error } = await supabase.from("estimate_requests").update(patch).eq("id", id);
    if (error) {
      setSaveError("Could not save your changes. Please try again.");
    }
    await qc.invalidateQueries({ queryKey: ["leads"] });
  }

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl">Estimate requests</h1>
          <Button variant="outline" onClick={signOut}>
            Sign out
          </Button>
        </div>
        {checkingAccess ? (
          <p className="mt-6">Checking access…</p>
        ) : accessError ? (
          <p role="alert" className="mt-6 text-destructive">
            Could not check dashboard access. Please refresh or sign in again.
          </p>
        ) : isAdmin === false ? (
          <p className="mt-6 text-muted-foreground">
            This account doesn't have access to the lead dashboard.
          </p>
        ) : (
          <>
            {saveError && (
              <p role="alert" className="mt-4 text-destructive">
                {saveError}
              </p>
            )}
            {leadsError && (
              <p role="alert" className="mt-4 text-destructive">
                Could not load requests. Please refresh and try again.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <input
                className={`${field} min-w-60 flex-1`}
                placeholder="Search name, phone, email, ZIP…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select className={field} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="all">All statuses</option>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {isLoading ? "Loading…" : `${filtered.length} of ${leads.length} requests`}
            </p>
            <ul className="mt-4 space-y-3">
              {filtered.map((l) => (
                <li key={l.id} className="rounded-md border border-border bg-card p-4 shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <button
                      type="button"
                      className="text-left"
                      onClick={() => setOpenId(openId === l.id ? null : l.id)}
                    >
                      <p className="font-semibold">{l.full_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {l.service || "Project"} · {l.zip} ·{" "}
                        {new Date(l.created_at).toLocaleString()}
                      </p>
                    </button>
                    <select
                      className={field}
                      value={l.status}
                      onChange={(e) => update(l.id, { status: e.target.value })}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {openId === l.id && (
                    <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
                      <div className="flex flex-wrap gap-2">
                        {l.phone && (
                          <Button asChild size="sm" variant="cta">
                            <a href={`tel:${l.phone}`}>
                              <Phone /> {l.phone}
                            </a>
                          </Button>
                        )}
                        {l.phone && (
                          <Button asChild size="sm" variant="outline">
                            <a href={`sms:${l.phone}`}>
                              <MessageSquare /> Text
                            </a>
                          </Button>
                        )}
                        {l.email && (
                          <Button asChild size="sm" variant="outline">
                            <a href={`mailto:${l.email}`}>
                              <Mail /> {l.email}
                            </a>
                          </Button>
                        )}
                      </div>
                      <dl className="grid gap-2 sm:grid-cols-2">
                        {[
                          ["Project type", l.project_type],
                          ["Address", l.address],
                          ["Square footage", l.sqft],
                          ["Preferred contact", l.contact_method],
                          ["Preferred start", l.start_date],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-muted-foreground">{k}</dt>
                            <dd>{v || "—"}</dd>
                          </div>
                        ))}
                      </dl>
                      <div>
                        <p className="text-muted-foreground">Description</p>
                        <p className="whitespace-pre-wrap">{l.description}</p>
                      </div>
                      <label className="block">
                        <span className="text-muted-foreground">Private notes</span>
                        <textarea
                          className={`${field} mt-1 w-full`}
                          rows={3}
                          defaultValue={l.notes}
                          onBlur={(e) =>
                            e.target.value !== l.notes && update(l.id, { notes: e.target.value })
                          }
                        />
                      </label>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

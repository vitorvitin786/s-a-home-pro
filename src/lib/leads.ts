const endpoint = "https://api.web3forms.com/submit";

export async function submitLead(form: FormData) {
  const accessKey =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "5831a730-e9f2-4195-9540-13e485e89e02";

  form.set("access_key", accessKey);
  form.set("from_name", "S&A Homes Services Website");
  form.set("subject", `New website lead — ${String(form.get("service") || "Project inquiry")}`);
  form.set("botcheck", "");

  const response = await fetch(endpoint, { method: "POST", body: form });
  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!response.ok || !result.success) throw new Error(result.message || "Request failed.");
  return result;
}

import { api } from "./hostinger-api";
export async function submitLead(form: FormData) {
 const data = Object.fromEntries(Array.from(form.entries()).map(([k,v])=>[k,typeof v==="string"?v:""]));
 return api.submit(data);
}

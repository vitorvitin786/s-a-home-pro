import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { api } from "@/lib/hostinger-api";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const session = await api.session();
    if (!session.authenticated) throw redirect({ to: "/auth" });
  },
  component: () => <Outlet />,
});

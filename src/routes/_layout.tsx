import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";

export const Route = createFileRoute("/_layout")({
  component: LayoutRoute,
});

function LayoutRoute() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

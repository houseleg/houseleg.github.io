import Link from '@mui/material/Link';
import { createRootRoute, Outlet, Link as RouterLink } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link component={ RouterLink } to="/">
          Home
        </Link>
        <Link component={ RouterLink } to="/about">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
});

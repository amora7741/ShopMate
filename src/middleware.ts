import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isBaseRoute = createRouteMatcher(["/"]);
const isProtectedRoute = createRouteMatcher([""]);

export default clerkMiddleware(async (auth, req) => {
  if (isBaseRoute(req)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

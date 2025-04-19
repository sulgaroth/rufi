import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Public routes are accessible by anyone
  publicRoutes: ["/sign-in", "/sign-up"],

  // Routes that require authentication
  // protectedRoutes: [], // You can define protected routes here if needed
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)",
  ],
}; 
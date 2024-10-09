// middleware.js
import { getToken } from "next-auth/jwt"; // Import getToken from next-auth
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET; // Use the same secret as in your auth.js

export async function middleware(req) {
  const token = await getToken({ req, secret });

  // Check if user is trying to access the /blog page
  if (req.nextUrl.pathname === "/blog") {
    // Redirect to login if no token is found (user is not logged in)
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  // // Check if user is trying to access the /blog page
  if (req.nextUrl.pathname === "/admin") {
    // Redirect to login if no token is found (user is not logged in)
    if (!token && !token?.isAdmin) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  // Redirect logged-in users trying to access /login or /register
  if (
    token &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow access to the page
  return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
  matcher: ["/blog", "/login", "/register", "/admin"], // Protects the /blog page
};

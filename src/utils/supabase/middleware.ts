import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/forgot",
    "/reset",
    "/error",
  ];

  const adminRoutes = ["/dashboard", "/profile", "/users", "audit-logs", "/reports", "/backup-restore", "/settings/options"];

  const userRoutes = ["/user/dashboard", "/user/profile"];

  const pathname = request.nextUrl.pathname;

  const isPublicRoutes = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const isAdminRoutes = adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const isUserRoutes = userRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  // not authenticated
  if (!user && !isPublicRoutes) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // role
  const role = user?.user_metadata.role;

  // authenticated
  if (user && isPublicRoutes) {
    if (role === "Admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    const url = request.nextUrl.clone();
    url.pathname = "/user/dashboard";
    return NextResponse.redirect(url);
  }

  // admin redirection
  if (role === "Admin" && !isAdminRoutes) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // user redirection
  if (role === "User" && !isUserRoutes) {
    const url = request.nextUrl.clone();
    url.pathname = "/user/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

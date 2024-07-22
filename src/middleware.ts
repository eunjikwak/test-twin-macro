// middleware.ts (or middleware.js)
import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt"; // next-auth에서 제공하는 JWT 토큰 읽기 함수

const secret = process.env.SECRET; // NextAuth 비밀 키

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret });

  // 로그인이 되어 있지 않은 경우 로그인 페이지로 리다이렉션
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 로그인된 경우 요청을 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: "/user/:path*", // /admin 경로와 그 하위 경로에 미들웨어 적용
};

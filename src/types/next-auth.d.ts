// `types/next-auth.d.ts` 파일을 만들어서 아래와 같이 작성합니다.
import { DefaultSession } from "next-auth";

// 사용자 정의 타입 정의
declare module "next-auth" {
  interface Session {
    user: {
      provider?: string; // provider 속성을 추가합니다.
    } & DefaultSession["user"];
  }

  interface User {
    provider?: string; // provider 속성을 추가합니다.
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string; // provider 속성을 추가합니다.
  }
}

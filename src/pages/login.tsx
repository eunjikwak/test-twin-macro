"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import tw, { styled } from "twin.macro";
import CredentialLogin from "@/components/CredentialLogin";
import { useRouter } from "next/router";
const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();
  if (session) {
    console.log();
    return (
      <div tw="flex justify-center items-center h-screen bg-gray-200 ">
        <Container tw="w-full max-w-[350px]">
          <div tw="font-extrabold text-4xl">로그인정보</div>
          <div tw="text-lg">{session?.user?.provider}로 로그인 완료</div>
          <div tw="text-lg">{session?.user?.email}</div>
          <div tw="text-lg">{session?.user?.name}</div>
          <button
            onClick={() => router.push("/user/mypage")}
            tw="w-full bg-black text-white rounded-lg px-4 py-3"
          >
            마이페이지가기
          </button>
          <button
            onClick={() => signOut({ redirect: false })}
            tw="w-full bg-black text-white rounded-lg px-4 py-3"
          >
            로그아웃
          </button>
        </Container>
      </div>
    );
  }
  return (
    <div tw="flex justify-center items-center h-screen bg-gray-200">
      <Container>
        <div tw="font-extrabold text-4xl">로그인하기</div>
        <CredentialLogin />
        <div>or</div>
        <button onClick={() => signIn("google")} className="button-google">
          <img src="/assets/google.png" alt="" tw="h-6" />
          Google로 시작하기
        </button>
        <button onClick={() => signIn("kakao")} className="button-kakao">
          <img src="/assets/kakao.png" alt="" tw="h-[58px]" />
        </button>
        <button onClick={() => signIn("naver")} className="button-naver">
          <img src="/assets/naver.png" alt="" tw="h-[58px]" />
          네이버로 시작하기
        </button>
        <button onClick={() => signIn("github")} className="button-github">
          <img src="/assets/github.png" alt="" tw="h-6" />
          gitHub로 시작하기
        </button>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div`
  ${tw`bg-gray-100 flex flex-col justify-center items-center w-fit px-4 py-8 rounded-[10px] m-auto gap-5`}

  .button-google {
    ${tw`w-[350px] border py-4 font-medium bg-white flex justify-center items-center gap-4 border-gray-700 rounded-lg`}
  }

  .button-naver {
    ${tw`w-[350px] border font-medium bg-[#03C75A] text-white flex justify-center items-center rounded-lg`}
  }

  .button-github {
    ${tw`w-[350px] border py-4 font-medium bg-white flex justify-center items-center gap-4 border-gray-700 rounded-lg`}
  }

  .button-kakao {
    ${tw`w-[350px] flex flex-col justify-center items-center bg-[#FEE500] rounded-[12px]`}
  }
`;

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import tw from "twin.macro";

function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("id") as string;
    const password = formData.get("password") as string;
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // 자동 리다이렉션을 방지합니다.
    });

    if (result?.error) {
      // 로그인 실패 시 오류 메시지를 설정합니다.
      setError("로그인 오류입니다.");
    } else if (result?.ok) {
      // 로그인 성공 시 리다이렉션합니다.
      router.push("/"); // 성공 후 리다이렉션할 페이지
    }
  };

  return (
    <div tw="max-w-[350px] w-full">
      <form onSubmit={handleSubmit} tw="flex flex-col gap-2 w-full">
        <input
          type="text"
          name="id"
          required
          placeholder="아이디를 입력하세요"
          tw="w-full px-4 py-2 rounded-lg "
        />
        <input
          type="password"
          name="password"
          required
          placeholder="비밀번호 입력"
          tw="w-full px-4 py-2 rounded-lg "
        />
        <button
          type="submit"
          tw="w-full bg-black text-white rounded-lg px-4 py-3"
        >
          로그인
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;

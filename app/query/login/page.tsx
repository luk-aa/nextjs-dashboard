import LoginForm from "./LoginForm";

export default async function Page({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) {
  const callbackUrl = (await searchParams)?.callbackUrl || "/dashboard";

  return <LoginForm callbackUrl={callbackUrl} />;
}

import { useSession, signOut } from "next-auth/react";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
export default function Header() {
  const { data: session } = useSession();
  let imgSrc: string = session?.user?.image ?? "/images/user-icon.png";
  if (session) {
    return (
      <>
        <NextLink
          href="/user"
          className="w-10 h-10 flex justify-center items-center overflow-hidden rounded-full"
          passHref
        >
          <Image className="w-full" src={imgSrc} alt="user logo" />
        </NextLink>
        <div>
          <button
            className=" mx-8 inline-block my-3 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={() => signOut()}
          >
            ログアウト
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <NextLink
        href="/auth/login"
        className="bg-gray-200 px-3 py-2 lg:py-2.5 rounded-lg text-sm mr-3"
      >
        ログイン
      </NextLink>
      <NextLink
        href="/auth/register"
        className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
      >
        登録
      </NextLink> */}
    </>
  );
}

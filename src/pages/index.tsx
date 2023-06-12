import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1>タイトル(変更しました！)</h1>
        <div>
          <ul className="flex">
            <li>
              <div className="before:border-l-2 before:border-dotted before:border-l-[#40b2b8] before:h-[18px] before:absolute before:left-0 before:top-[6px] before:bottom-auto before:w-[2px] after:border-l-2 after:border-dotted after:border-l-[#40b2b8] after:h-[18px] after:absolute after:left-[2px] after:top-[4px] after:w-[2px] relative w-[100%]">
                ガイド
              </div>
            </li>
            <li className="relative">
              <div className="before:border-t-2 before:border-dotted before:border-t-[#40b2b8] before:h-2 before:absolute before:left-0 before:left-[2px] before:top-0 before:w-[100%] after:border-t-2 after:border-dotted after:border-t-[#40b2b8] after:h-2 after:absolute after:left-0 after:top-[2px] after:w-[100%] border-b-2 border-dashed border-b-[#40b2b8]">
                ガイド
              </div>
            </li>
            <li className="relative">
              <div className="inline shrink-0 before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-0 before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[2px] after:w-[100%] border-t-2 border-dashed border-t-[#40b2b8]">
                ガイド
              </div>
            </li>
            <li className="group">
              <span className="z-10 transition-all duration-200 ease-in-out hover:shadow-top h-10 w-20 hover:bg-white">
                ホバーして
              </span>
              <div className="z-20 hidden group-hover:block duration-200 bg-red-500 h-20 w-[100px]"></div>
            </li>
          </ul>
        </div>
        <div className="mt-32">
          <ul className="flex w-auto md:w-[768px] gap-1 md:w-[768px] lg:w-[1024px] mx-auto">
            <li className="relative block bg-white-300 w-1/5 group">
              <div className="transition-all duration-200 ease-in-out 
              delay-500
              group-hover:before:animate-hoverFade
              group-hover:after:animate-hoverFade
              group-hover:after:opacity-0
              group-hover:before:opacity-0
              group-hover:shadow-top before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-0 before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[2px] after:w-[100%]">
                <span className="opacity-0 group-hover:animate-hoverFade before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-[-3px] before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[-5px] after:w-[100%]" />
                ラベル
              </div>
              <div className="h-0 drop-shadow-lg opacity-0 absolute top-full left-0 group-hover:h-32 md:w-[768px] group-hover:opacity-100 delay-500 lg:w-[1024px] bg-white">
                ホバー時
              </div>
            </li>
            <li className="block bg-green-300 w-1/5">リスト</li>
            <li className="block bg-green-300 w-1/5">リスト</li>
            <li className="block bg-green-300 w-1/5">リスト</li>
            <li className="block bg-green-300 w-1/5">リスト</li>
          </ul>
        </div>
      </main>
    </>
  );
}

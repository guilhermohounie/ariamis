import { FC, Fragment, ReactNode } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { DefaultSeoProps, NextSeo } from "next-seo";
import { defaultSeo } from "@/lib/seo";

interface LayoutProps extends DefaultSeoProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <NextSeo {...defaultSeo} {...props} />
      <div className="max-w-screen-md p-4 mx-auto">
        <nav className="flex flex-col gap-2 p-4 mt-4 bg-white border">
          <div className="pb-2 border-b">
            <Image
              src="/assets/media/logo.png"
              alt="logo"
              height={66}
              width={69}
            />
            <h1 className="text-3xl">Ariamis</h1>
            <p>Webcomics of an alter ego.</p>
          </div>
          <ul className="flex flex-wrap gap-4">
            <li>
              <NextLink href="/">
                <a className="hover:underline">Home</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/about">
                <a className="hover:underline">About</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/archive">
                <a className="hover:underline">Archive</a>
              </NextLink>
            </li>
          </ul>
        </nav>
        <main className="my-8">{children}</main>
      </div>
    </Fragment>
  );
};

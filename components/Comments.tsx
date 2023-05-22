"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
}

function Comments({className }: Props) {
  const { theme } = useTheme();

  return (
    <div>
      <div className={`${className} border-t border-dark/10 dark:border-light/10 border-solid pt-12 flex flex-col items-center mb-8`}>
        <h1 className="text-4xl font-bold mb-8 md:text-3xl">Comments</h1>
      </div>
      <Giscus
        id="comments"
        repo="nhthieu/hieu-nguyen-website"
        repoId="R_kgDOJjiQVA"
        category="General"
        categoryId="DIC_kwDOJjiQVM4CWpy1"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark_high_contrast' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

export default Comments
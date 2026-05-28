import { highlight } from "sugar-high";
import type { ReactNode } from "react";

interface Props {
  content: string;
}

function HighlightedCode({ code, lang }: { code: string; lang: string }) {
  const html = highlight(code);
  return (
    <pre
      className="my-6 overflow-x-auto rounded-sm border border-white/[0.06]"
      style={{
        "--sh-class": "#5eead4",
        "--sh-keyword": "#c792ea",
        "--sh-string": "#c3e88d",
        "--sh-comment": "#546e7a",
        "--sh-identifier": "#eeffff",
        "--sh-sign": "#89ddff",
        "--sh-property": "#82aaff",
        "--sh-entity": "#f07178",
        "--sh-jsxliterals": "#f78c6c",
        "--sh-space": "transparent",
        "--sh-break": "transparent",
      } as React.CSSProperties}
    >
      {lang && (
        <div className="px-4 pt-3 pb-2 text-[10px] text-white/20 uppercase tracking-wider">
          {lang}
        </div>
      )}
      <code
        className="block px-4 pb-4 text-xs leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
}

export function BlogContent({ content }: Props) {
  const blocks = content.split("\n\n");
  const elements: ReactNode[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    // code block
    if (block.startsWith("```")) {
      const lines = block.split("\n");
      const lang = lines[0].slice(3).trim();
      const code = lines.slice(1, -1).join("\n");
      elements.push(
        <HighlightedCode key={i} code={code} lang={lang} />,
      );
      continue;
    }

    // heading
    if (block.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-lg md:text-xl font-semibold text-white/90 mt-10 mb-3"
        >
          {block.slice(3)}
        </h2>,
      );
      continue;
    }

    // regular paragraph
    elements.push(
      <p key={i} className="text-xs md:text-sm leading-relaxed text-white/50 my-4">
        {block}
      </p>,
    );
  }

  return <>{elements}</>;
}

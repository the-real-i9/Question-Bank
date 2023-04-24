/* eslint-disable import/prefer-default-export */
export function markdownToHtml(markdownTxt) {
  let markdown = markdownTxt;

  // Replace horizontal rules
  markdown = markdown.replace(/^---/gm, "<hr>");

  // Replace headers
  markdown = markdown.replace(/^#{1,6} (.*)$/gm, (match, p1) => {
    const level = match.indexOf("#") + 1;
    return `<h${level}>${p1}</h${level}>`;
  });

  // Replace emphasis
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  // Replace strong emphasis
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Replace inline code
  markdown = markdown.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Replace code blocks
  markdown = markdown.replace(
    /^```(\w+)?\n([\s\S]+?)\n```$/gm,
    (match, p1, p2) => {
      if (p1) {
        return `<pre><code class="${p1}">${p2}</code></pre>`;
      }
      return `<pre><code>${p2}</code></pre>`;
    }
  );

  // Replace paragraphs
  markdown = markdown.replace(/^\s*(\S(?:.|\n(?!\n))*)\n*/gm, "<p>$1</p>");

  return markdown;
}

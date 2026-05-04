import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const htmlContent = marked(content);

  return (
    <main style={{ padding: "3rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>{data.title}</h1>
      <p style={{ color: "#666" }}>{data.date}</p>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <main style={{ padding: "3rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>
              {post.title} ({post.date})
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

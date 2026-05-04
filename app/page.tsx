export default function Home() {
  return (
    <main style={{ padding: "4rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Godwit's Playground */}
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Godwit's Nest
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#555" }}>
          A place for small web apps, experiments, and ideas.
        </p>
      </header>

      {/* Navigation */}
      <nav style={{ marginBottom: "3rem" }}>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", padding: 0 }}>
          {/* <li><a href="/apps">Apps</a></li> */}
          {/* <li><a href="/about">About</a></li> */}
          {/* <li><a href="/contact">Contact</a></li> */}
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>

      {/* Placeholder apps */}
      <section>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
          {/* Upcoming Apps */}
        </h2>
        <ul style={{ lineHeight: "1.8" }}>
          {/* <li>🧠 Idea Inbox — capture and organize app ideas quickly</li> */}
          {/* <li>📊 Tiny Dashboard — experiments with data + visualization</li> */}
          {/* <li>🧪 Sandbox — space for quick prototypes</li> */}
        </ul>
      </section>
    </main>
  );
}

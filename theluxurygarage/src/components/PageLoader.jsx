import React, { useEffect, useState } from "react";

/**
 * PageLoader
 * Props:
 *  - file (string): path relative to /html/, e.g. "bmw_x6.html"
 *
 * This component fetches the HTML file from /html/<file>
 * and injects it into the DOM. Useful to preserve original HTML.
 */
export default function PageLoader({ file }) {
  const [html, setHtml] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    // ✅ Usamos backticks (``) para interpolar correctamente el nombre del archivo
    const url = `/html/${file}`;
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(`No se pudo cargar ${file} (status ${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (mounted) setHtml(text);
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      });

    return () => {
      mounted = false;
    };
  }, [file]);

  if (error) {
    return (
      <div style={{ padding: 40, color: "#f66", background: "#111" }}>
        <h2>Error cargando la página</h2>
        <p>{error}</p>
        <p>
          Asegurate de que <code>/public/html/{file}</code> exista.
        </p>
      </div>
    );
  }

  if (!html) {
    return (
      <div style={{ padding: 40, color: "#fff", background: "#000" }}>
        <p>Cargando {file}…</p>
      </div>
    );
  }

  // inject original HTML
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

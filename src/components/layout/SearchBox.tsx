"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/data/products";

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const matches =
    query.trim().length > 0
      ? products.filter((p) =>
          p.name.toLowerCase().includes(query.trim().toLowerCase())
        )
      : [];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Search for a memory"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-chocolate/30 text-chocolate hover:border-caramel transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-80 rounded-2xl border-2 border-chocolate/20 bg-warmwhite p-4 shadow-retro-card">
          <label htmlFor="site-search" className="sr-only">
            Search for a memory
          </label>
          <input
            id="site-search"
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a memory..."
            className="w-full rounded-full border-2 border-chocolate/30 bg-cream px-4 py-2 text-chocolate placeholder:text-chocolate/40 focus:border-caramel focus:outline-none"
          />

          {query.trim().length > 0 && (
            <ul className="mt-3 flex flex-col gap-1">
              {matches.length > 0 ? (
                matches.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/catalog/${product.slug}`}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-chocolate hover:bg-cream"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-sm text-chocolate/60">
                  Looks like we haven&apos;t found that memory yet.
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

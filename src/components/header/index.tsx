"use client";

import { Menu, Phone, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const whatsappNumber = "+5521980666363";
  const whatsappMessage = "Olá, gostaria de agendar uma consulta. ";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity inline-block max-w-[200px]"
          >
            <h1 className="text-xl font-display font-bold text-foreground leading-tight">
              Revival Core
              Wellness Physiotherapy
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </form>
            </div>

            <Button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
              size="icon"
              variant="ghost"
            >
              <Search className="w-5 h-5 text-foreground" />
            </Button>

            <Link href={whatsappLink} target="_blank" className="hidden lg:flex btn btn-primary text-sm py-2.5 px-5">
              <Phone className="w-4 h-4" />
              Entre em contato
            </Link>

            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
              size="icon"
              variant="ghost"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </form>
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-down">
            <nav className="flex flex-col gap-2 mb-4">
              {/* <Button
                onClick={() => {
                  onCategoryFilter(null);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors "bg-primary text-primary-foreground`}
              >
                Todos os Artigos
              </Button> */}
              {/* {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryFilter(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                >
                  {category.name}
                </button>
              ))} */}
            </nav>
            <Link href={whatsappLink} target="_blank" className="btn btn-primary w-full text-sm">
              <Phone className="w-4 h-4" />
              Entre em contato
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

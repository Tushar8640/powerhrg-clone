import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsIndex from "@/components/news/NewsIndex";
import PressReleases from "@/components/news/PressReleases";
import PressContacts from "@/components/news/PressContacts";
import { categories, featuredPost, posts, pressContact, pressReleases, totalPages } from "@/lib/news-content";

export const metadata: Metadata = {
  title: "News (study clone)",
};

// No hero on this page - the featured post sits directly under the header.
export default function NewsPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main" className="pt-[73px]">
        <NewsIndex featured={featuredPost} posts={posts} categories={categories} totalPages={totalPages} />
        <PressReleases releases={pressReleases} />
        <PressContacts {...pressContact} />
      </main>
      <Footer />
    </>
  );
}

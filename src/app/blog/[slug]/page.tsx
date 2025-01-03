import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Comments from "@/components/comments"

export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    name,
    summary,
    image,
    content,
    author->{
      bio,
      image,
      name
    }
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>; // Fallback for missing data
  }

  const imageUrl = post.image ? urlForImage(post.image) : "/fallback-image.jpg";
  const authorImageUrl = post.author?.image ? urlForImage(post.author.image) : "/fallback-author.jpg";

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.name}
      </h1>

      {/* Featured Image */}
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={post.name || "Featured image"}
        className="rounded w-full h-[150px] md:h-[400px]"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={authorImageUrl}
          width={200}
          height={200}
          alt={post.author?.name || "Author image"}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author?.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author?.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <div className="text-lg leading-normal text-dark/80 dark:text-light/80 text-align">
        <PortableText value={post.content} />
      </div>
      <Comments />
    </article>
  );
}

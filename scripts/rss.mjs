import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'A3M NextGen',
    site_url: 'http://localhost:3000',
    feed_url: 'ttp://localhost:3000',
  });

  allBlogs.map((blog) => {
    feed.item({
      title: blog.title,
      url: `http://localhost.com/blog/${blog.slug}`,
      date: blog.publishedAt,
      description: blog.description,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
import { writeFileSync } from 'fs';
import RSS from 'rss';


async function generate() {
  const feed = new RSS({
    title: 'A3M NextGen',
    site_url: 'http://localhost:3000',
    feed_url: 'ttp://localhost:3000',
  });

 
  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
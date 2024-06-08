import axios from 'axios';
import cheerio from 'cheerio';

interface Entry {
  number: number;
  title: string;
  points: number;
  comments: number;
}

export const fetchEntries = async (): Promise<Entry[]> => {
  const response = await axios.get('https://news.ycombinator.com/');
  const html = response.data;
  const $ = cheerio.load(html);

  const entries: Entry[] = [];

  $('tr.athing').each((index, element) => {
    if (index >= 30) return false;

    const number = parseInt($(element).find('.rank').text().replace('.', ''), 10);
    const title = $(element).find('.title a').text();
    const subtext = $(element).next().find('.subtext');
    const points = parseInt(subtext.find('.score').text().replace(' points', ''), 10) || 0;
    const comments = parseInt(subtext.find('a').last().text().replace(' comments', ''), 10) || 0;

    entries.push({ number, title, points, comments });
  });

  return entries;
};

const countWords = (title: string): number => {
  return title.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean).length;
};

export const filterEntries = (entries: Entry[], condition: 'more' | 'less'): Entry[] => {
  if (condition === 'more') {
    return entries
      .filter(entry => countWords(entry.title) > 5)
      .sort((a, b) => b.comments - a.comments);
  } else {
    return entries
      .filter(entry => countWords(entry.title) <= 5)
      .sort((a, b) => b.points - a.points);
  }
};
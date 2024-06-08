import { fetchEntries, filterEntries } from '../src/crawler';

describe('Web Crawler', () => {
  test('fetchEntries should return 30 entries', async () => {
    const entries = await fetchEntries();
    expect(entries.length).toBe(30);
  });

  test('filterEntries with "more" condition should filter and sort by comments', async () => {
    const entries = await fetchEntries();
    const filteredEntries = filterEntries(entries, 'more');
    expect(filteredEntries).toBeInstanceOf(Array);
    expect(filteredEntries[0].comments).toBeGreaterThanOrEqual(filteredEntries[1].comments);
  });

  test('filterEntries with "less" condition should filter and sort by points', async () => {
    const entries = await fetchEntries();
    const filteredEntries = filterEntries(entries, 'less');
    expect(filteredEntries).toBeInstanceOf(Array);
    expect(filteredEntries[0].points).toBeGreaterThanOrEqual(filteredEntries[1].points);
  });
});
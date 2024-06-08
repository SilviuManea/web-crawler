import express from 'express';
import { fetchEntries, filterEntries } from './crawler';
import path from 'path';

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/entries', async (req, res) => {
  try {
    const entries = await fetchEntries();
    res.json(entries);
  } catch (error) {
    res.status(500).send('Error fetching entries');
  }
});

app.get('/filter/more', async (req, res) => {
  try {
    const entries = await fetchEntries();
    const filteredEntries = filterEntries(entries, 'more');
    res.json(filteredEntries);
  } catch (error) {
    res.status(500).send('Error filtering entries');
  }
});

app.get('/filter/less', async (req, res) => {
  try {
    const entries = await fetchEntries();
    const filteredEntries = filterEntries(entries, 'less');
    res.json(filteredEntries);
  } catch (error) {
    res.status(500).send('Error filtering entries');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
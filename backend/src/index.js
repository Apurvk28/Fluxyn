const express = require('express');
const cors = require('cors');
require('dotenv').config();

const generateRoutes = require('./routes/generate');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api', generateRoutes);

// ─── Legacy routes ────────────────────────────────────────────────────────────
const MOCK_SIGNALS = [
  { id: '1', title: 'AI Agents replacing workflows', summary: 'AI agents are automating complex workflows across industries', category: 'AI', score: 92, velocity: 'high' },
  { id: '2', title: 'Autonomous finance systems', summary: 'AI systems fully managing personal and corporate finance.', category: 'Finance', score: 88, velocity: 'medium' },
  { id: '3', title: 'Brain-computer interfaces', summary: 'Non-invasive neurotech scaling beyond medical applications.', category: 'Deep Tech', score: 92, velocity: 'high' },
  { id: '4', title: 'Decentralized AI networks', summary: 'Compute sharing protocols challenging centralized hyperscalers.', category: 'Web3 & AI', score: 85, velocity: 'medium' },
];

app.get('/signals', (req, res) => res.json(MOCK_SIGNALS));
app.get('/signals/:id', (req, res) => {
  const signal = MOCK_SIGNALS.find((s) => s.id === req.params.id);
  signal ? res.json(signal) : res.status(404).json({ error: 'Signal not found' });
});
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log(`User subscribed: ${email}`);
  res.json({ status: 'success', message: 'Successfully joined Fluxyn.', email });
});
app.get('/feed', (req, res) => {
  res.json([...MOCK_SIGNALS].sort((a, b) => b.score - a.score).slice(0, 2));
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.listen(PORT, () => {
  console.log(`✅ Fluxyn backend running on http://localhost:${PORT}`);
  console.log(`   Generate endpoint: POST http://localhost:${PORT}/api/generate`);
});

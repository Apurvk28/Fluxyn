const { generateWebsite } = require('../services/aiService');

/**
 * POST /api/generate
 * Body: { prompt: string }
 * Returns: { code: string, projectId: string }
 */
async function generate(req, res) {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'A non-empty prompt is required.' });
  }

  if (prompt.trim().length > 2000) {
    return res.status(400).json({ error: 'Prompt must be under 2000 characters.' });
  }

  try {
    console.log(`[generate] Prompt received: "${prompt.trim().slice(0, 80)}..."`);
    const code = await generateWebsite(prompt.trim());

    // Generate a simple project ID (will be replaced by DB ID once DB is wired)
    const projectId = `proj_${Date.now()}`;

    console.log(`[generate] Code generated successfully (${code.length} chars). projectId=${projectId}`);
    return res.json({ code, projectId });
  } catch (err) {
    console.error('[generate] Error:', err.message);

    if (err.message.includes('GROQ_API_KEY')) {
      return res.status(500).json({ error: 'AI service not configured. Please set GROQ_API_KEY.' });
    }

    return res.status(500).json({ error: 'Failed to generate website. Please try again.' });
  }
}

module.exports = { generate };

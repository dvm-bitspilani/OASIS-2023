module.exports = { output: 'export', images: { unoptimized: true }, webpack(config) { config.resolve.alias.canvas = false; return config; } };

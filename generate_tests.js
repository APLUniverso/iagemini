#!/usr/bin/env node
/**
 * Script para generar tests.json desde prompts.txt
 * Uso: node generate_tests.js
 */

const fs = require('fs');

// Leer el archivo de prompts
// Cambia entre 'prompts.txt' (40 prompts) y 'prompts_test.txt' (5 prompts)
const prompts = fs.readFileSync('prompts_test.txt', 'utf-8')
  .split('\n')
  .filter(line => line.trim().length > 0);

// Generar tests
const tests = prompts.map(prompt => ({
  vars: { prompt }
}));

// Guardar como JSON
fs.writeFileSync('tests.json', JSON.stringify(tests, null, 2));

console.log(`✓ Generados ${tests.length} tests en tests.json`);

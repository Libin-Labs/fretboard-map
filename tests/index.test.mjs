import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('uses standard guitar low E tuning', () => {
  assert.equal(api.fretboardNotes()[0][0].midi, 40);
});
test('maps octave at twelfth fret', () => {
  assert.equal(api.fretboardNotes([40], 12)[0][12].midi, 52);
});
test('maps pitch classes modulo twelve', () => {
  assert.equal(api.fretboardNotes([59], 1)[0][1].pitchClass, 0);
});
test('supports caller-supplied tuning', () => {
  assert.equal(api.fretboardNotes([60, 64], 3).length, 2);
});
test('includes open string and final fret', () => {
  assert.equal(api.fretboardNotes([60], 5)[0].length, 6);
});
test('rejects frets exceeding MIDI range', () => {
  assert.throws(() => api.fretboardNotes([120], 12), RangeError);
});

import * as api from '@lp-labs/fretboard-map';
import { fretboardNotes } from '@lp-labs/fretboard-map';
const board = fretboardNotes();
if (board[0]?.[0]?.midi !== 40 || board[0]?.[12]?.midi !== 52)
  throw new Error('Fret mapping mismatch');
// @ts-expect-error invalid argument must be rejected by declarations
api.fretboardNotes(['E2']);

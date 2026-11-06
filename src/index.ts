export interface FretNote {
  readonly midi: number;
  readonly pitchClass: number;
}
export function fretboardNotes(
  tuning: readonly number[] = [40, 45, 50, 55, 59, 64],
  frets = 24,
): FretNote[][] {
  if (
    !Array.isArray(tuning) ||
    tuning.length < 1 ||
    tuning.length > 32 ||
    tuning.some((n) => !Number.isInteger(n) || n < 0 || n > 127)
  )
    throw new RangeError('Tuning must contain MIDI notes [0,127]');
  if (
    !Number.isSafeInteger(frets) ||
    frets < 0 ||
    frets > 48 ||
    tuning.some((n) => n + frets > 127)
  )
    throw new RangeError('Fret count outside MIDI range');
  return tuning.map((open) =>
    Array.from({ length: frets + 1 }, (_, f) => ({ midi: open + f, pitchClass: (open + f) % 12 })),
  );
}

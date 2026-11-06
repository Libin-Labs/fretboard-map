# @lp-labs/fretboard-map

Fretted-instrument string/fret pitch mapping from caller-supplied MIDI tuning.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/fretboard-map
```

## Working example

```js
import { fretboardNotes } from '@lp-labs/fretboard-map';
const board = fretboardNotes();
if (board[0]?.[0]?.midi !== 40 || board[0]?.[12]?.midi !== 52)
  throw new Error('Fret mapping mismatch');
```

CommonJS: `const api = require('@lp-labs/fretboard-map')`.

## Behavior, customization and limits

Maps integer MIDI tuning values and fret numbers to MIDI notes and pitch classes. The default tuning is guitar low-to-high E2–E4; instrument geometry, string bending and alternate temperaments are outside scope.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export interface FretNote {
  readonly midi: number;
  readonly pitchClass: number;
}
export declare function fretboardNotes(tuning?: readonly number[], frets?: number): FretNote[][];
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.

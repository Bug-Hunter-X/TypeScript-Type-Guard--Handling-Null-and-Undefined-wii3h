# TypeScript Type Guard Bug: Null and Undefined Handling

This repository demonstrates a common issue in TypeScript type guards related to the handling of `null` and `undefined` values. The example shows a function that tries to differentiate between string and number types, but fails to correctly handle `null` or `undefined`. This leads to runtime errors because the type guard doesn't explicitly check for these values.

The solution demonstrates how to properly handle these cases using optional chaining or explicit null checks within the type guard.
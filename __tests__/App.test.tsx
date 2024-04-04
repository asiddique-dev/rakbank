/**
 * @format
 */

import 'react-native';
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { calculateRisk } from '../src/utils';

describe('sumObjectValues function', () => {
  test('returns 0 for an empty array', () => {
    expect(calculateRisk([])).toBe(0);
  });

  test('returns the sum of values for a single object', () => {
    const data = [{ value: 5 }];
    expect(calculateRisk(data)).toBe(5);
  });

  test('returns the sum of values for multiple objects', () => {
    const data = [{ value: 3 }, { value: 7 }, { value: 2 }];
    expect(calculateRisk(data)).toBe(12);
  });

  test('handles objects with missing or non-numeric values', () => {
    const data = [{ value: 4 }, { name: 'Alice' }, {}];
    expect(calculateRisk(data)).toBe(4);
  });
});
/* Utility */
import { getHistoryItemIndex } from '~/utils/getHistoryItemIndex';
/* Mock API Data */
import { mockRawResults } from '~/test/__mocks__/mockDecodeVinValuesExtendedResults';
/* Types */
import { DecodeVinValuesExtendedResults, HistoryItem } from '~/types';

const MOCK_ITEM: HistoryItem = {
  VIN: 'TESTVIN',
  results: mockRawResults as DecodeVinValuesExtendedResults,
};
describe('getHistoryItemIndex helper function', () => {
  const mockHistory: HistoryItem[] = [MOCK_ITEM];

  test('is correctly exported as a function', () => {
    expect(getHistoryItemIndex).toBeDefined();
    expect(typeof getHistoryItemIndex === 'function').toBe(true);
  });

  test('returns the correct index number if an item exists in the history array', () => {
    const itemIndex = getHistoryItemIndex(MOCK_ITEM.VIN, mockHistory);
    expect(itemIndex).toEqual(0);
  });

  test('returns -1 if item does not exist in the history array', () => {
    const itemIndex = getHistoryItemIndex('VINMOCK', mockHistory);
    expect(itemIndex).toEqual(-1);
  });
});

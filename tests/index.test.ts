import { expect, test } from 'bun:test';
import { getAccountDataV1 } from '../src';

test('getAccountDataV1', async () => {
  const data = await getAccountDataV1('fabra', 'olivr', process.env.HDEV_API_KEY!);
  if (data.success) {
    expect(data).toHaveProperty('data');
    console.log(data);
  }
});
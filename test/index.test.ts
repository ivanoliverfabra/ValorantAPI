import { describe, expect, it } from 'bun:test';
import { getAccountDataV1 } from "../src/utils";

describe('should', () => {
  it('Get Account Data', async () => {
    const name = 'fabra';
    const tag = 'olivr';
    const apiKey = 'HDEV-64ac3f15-af4b-4db4-a2d9-af61405336aa';

    const data = await getAccountDataV1(name, tag, apiKey);

    if ('errors' in data) {
      console.error(data.errors);
      return;
    }

    expect(data.data.name).toBe(name);
    expect(data.data.tag).toBe(tag);

    const puuid = data.data.puuid;

    const data2 = await getAccountDataV1(puuid, apiKey);
    
    if ('errors' in data2) {
      console.error(data2.errors);
      return;
    }

    expect(data2.data.puuid).toBe(puuid);
    expect(data2.data.name).toBe(name);
    expect(data2.data.tag).toBe(tag);
  })
})

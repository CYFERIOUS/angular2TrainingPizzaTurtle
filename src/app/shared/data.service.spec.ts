import { DataService } from "./data.service";
describe('class DataService', () => {
  let reversePipe = new DataService();
  describe('getDetails()', () => {
    it('should get data from getDetails function in dataService class', async () => {
      const testFun = await reversePipe.getDetails();
      expect(testFun).toBe('Data');
    });
  });
});

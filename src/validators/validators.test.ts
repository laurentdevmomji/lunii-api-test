import {validateOriginalUrl} from './validators'


afterEach(() => {
    jest.resetAllMocks()
  })


  describe("validators", () => {
    
      
    describe("validateOriginalUrl", () => {
      test("should return true if originalUrl is valid", async () => {

        const url = "www.lunii.com";
        const validatedUrl = validateOriginalUrl(url);
        
        expect(validatedUrl).toEqual(true)
      })
  
      test("should return false if originalUrl is not valid", async () => {

        const url = "https://lunii";
        const validatedUrl = validateOriginalUrl(url);
        
        expect(validatedUrl).toEqual(false)
      })
    })
  })
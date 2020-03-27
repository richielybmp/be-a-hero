const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerar Id único', () => {
    it('deve gerar um ID único', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});
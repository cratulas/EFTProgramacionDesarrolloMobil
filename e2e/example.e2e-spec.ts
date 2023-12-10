// example.e2e-spec.ts
describe('Nombre de la prueba', () => {
    it('debería hacer algo', () => {
      // Aquí escribe tu prueba utilizando Protractor
      // Ejemplo: Navegar a una URL y verificar elementos
      browser.get('/');
      expect(element(by.css('h1')).getText()).toEqual('Título de la página');
    });
  });
  
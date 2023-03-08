describe('AuthController', () => {
  describe('auth', () => {
    it.skip('should return a token', async () => {
      await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'testestest' }),
      })
        .then((response) => response.json())
        .then((data) => {
          expect(data).toEqual(
            expect.objectContaining({
              access_token: expect.any(String),
            }),
          );
        });
    });

    it.skip('should create admin user if username is alejandro', async () => {
      await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'alejandro' }),
      })
        .then((response) => response.json())
        .then((data) => {
          expect(data).toEqual(
            expect.objectContaining({
              access_token: expect.any(String),
              user: expect.objectContaining({
                username: 'alejandro',
                role: 'admin',
              }),
            }),
          );
        });
    });

    it('should return a user and a token', async () => {
      await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'testestest' }),
      })
        .then((response) => response.json())
        .then((data) => {
          expect(data).toEqual(
            expect.objectContaining({
              access_token: expect.any(String),
              user: expect.objectContaining({
                username: 'testestest',
                role: 'user',
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
              }),
            }),
          );
        });
    });
  });
});

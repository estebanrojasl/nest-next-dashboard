describe('UserController', () => {
  describe('user', () => {
    it('should return a user', async () => {
      const signIn = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'testestest' }),
      });

      const data = await signIn.json();

      const meRequest = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.access_token}`,
        },
        body: JSON.stringify({ username: 'testestest' }),
      });

      const me = await meRequest.json();

      expect(me).toEqual(
        expect.objectContaining({
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

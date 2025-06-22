export const login = async (email: string, password: string) => {

    try {

        const response = await fetch(`http://localhost:3000/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Credenciales inválidas');
        }


        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error en login:', error);
        throw error;
    }
}
// Simula una llamada a una API real de autenticación.
// En un proyecto con backend, aquí iría el fetch/axios hacia tu endpoint.

const FAKE_DELAY_MS = 400;

export const loginRequest = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email || !password) {
                reject(new Error("Correo y contraseña son requeridos"));
                return;
            }

            resolve({
                email,
                name: email.split("@")[0],
            });
        }, FAKE_DELAY_MS);
    });
};

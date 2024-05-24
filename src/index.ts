import app from './app';
import { AppDataSource } from './db/connection';

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Base de Dados Conectada");
        app.listen(6505, () => {
            console.log("Servidor Ativo");
        });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }

}

main();
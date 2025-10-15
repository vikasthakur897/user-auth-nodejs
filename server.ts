import  app  from './src/app'
import { config } from './src/config/config';
import connectDB from './src/config/db-connection';

const server = async () => {
    //Connect database
    await connectDB()

    //Port config
    const port = config.port || 1437

    app.listen(port , () => {
        console.log(`http://localhost:${port}`)
    });
}

server()
import  app  from './src/app'

const server = async () => {
    const port = 1437

    app.listen(port , () => {
        console.log(`http://localhost:${port}`)
    });
}

server()
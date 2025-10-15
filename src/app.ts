
import  express  from "express";
import globalErrorHandler from "./globalErrorHandler";

const app = express();

app.get('/', (req, res, next) => {
    res.json({
        message: "Welcome to user Authantication"
    })
})

// Global Error Handler

app.use(globalErrorHandler);


export default app
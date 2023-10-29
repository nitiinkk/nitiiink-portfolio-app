import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3002;

// app.use(cors());

app.get('/hello', (req, res) => {
    console.log('someone htting backend');
    const data = {
        message: "This is a sample call",
        status: "success"
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
})

app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
})
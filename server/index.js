import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("build"));

app.get('/hello', (req, res) => {
    const data = {
        message: "This is a sample call",
        status: "success"
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
})

app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
});
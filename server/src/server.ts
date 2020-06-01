import express, { response } from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log("Listagem de usuários");
    res.json(['Eae',
                'Como vai',
                'Tudo bem?',
                'Yeees!'])
});


app.listen(3333);

// export default app;
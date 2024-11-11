const express = require('express')
const path = require('path')
const { exec } = require('child_process')

const app = express()

app.use(express.static(path.join(__dirname, './static')))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.get('/company',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'company.html'))
})

app.get('/404',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'blog.html'))
})

app.get('/checkout',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'checkout.html'))
})

app.get('/features',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'features.html'))
})

app.get('/shop',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'shop.html'))
})

app.get('/technology',(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'technology.html'))
})

app.get('/category/enterprise',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/category', 'enterprise.html'))
})

app.get('/category/individuals',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/category', 'individuals.html'))
})

app.get('/product/essentials-enterprise',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'essentials-enterprise.html'))
})

app.get('/product/standard-enterprise',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'standard-enterprise.html'))
})

app.get('/product/professional-enterprise',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'professional-enterprise.html'))
})

app.get('/product/essentials',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'essentials.html'))
})

app.get('/product/standard',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'standard.html'))
})

app.get('/product/professional',(req, res) => {
    res.sendFile(path.join(__dirname, 'static/product', 'professional.html'))
})

app.get('/run-scrapedin', (req, res) => {
    exec('python3 ScrapedIn.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error running ScrapedIn.py');
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.get('/run-scrape-experiences', (req, res) => {
    exec('python3 scrapeExperiences.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error running scrapeExperiences.py');
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'login.html'));
});

app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'result.html'));
});

app.listen(5050,() => {
    console.log('running')
})

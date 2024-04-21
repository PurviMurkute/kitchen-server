import express from 'express';

const app = express();

app.use(express.json());

const PORT = 5000;

app.get('/food/order', (req, res)=>{

    //http://localhost:5000/food/order?quantity=5&menu=samosa&price=10

    const {menu, quantity, price} = req.query;
    const totalprice = parseInt(price)*parseInt(quantity);
    const {name, age, college} = req.headers;

    console.log('Headers:', req.headers);

    console.log(req.query);
    
    res.json({
        message: `You have ordered ${quantity} ${menu}`,
        bill: `your total bill is ${totalprice}`,
        details: `i am ${name} and my age is ${age} and my college name is ${college}`
    })
})

app.get('/food/:type', (req, res)=>{
    const {type} = req.params;
    
    if(type=="veg"){
        return res.json({
            message: "you have ordered veg food"
        })
    }
    else{
        return res.json({
            message: "ypu have ordered non-veg food"
        })
    }
    
})

app.post('/user', (req, res)=>{
    const {name, city} = req.body;

    res.json({
        message: `hello i am ${name} from ${city}`
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
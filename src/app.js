const { engine } = require('express-handlebars');



const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { create,ExpressHandlebars} = require('express-handlebars');
const app = express()
const hbs = create()



// Using the engine factory:
engine({ /* config */ });

// Create an instance:
create({ /* config */ });

// Using the class:
new ExpressHandlebars({ /* config */})

hbs.getPartials().then(function(partials){
  console.log("hello:",partials)
})
// port 
const port = 3000

app.use(morgan('combined'))
// sets up Handlebars as the template engine.
app.engine('hbs', engine({extname: '.hbs'}));
//  specifies Handlebars as the default view engine.
app.set('view engine', '.hbs');
// 
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home', {
    showTitle: true,

    // Override `foo` helper only for this rendering.
    helpers: {
        foo() { return 'lo.'; }
    }
});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


let path=require('path');
let express = require('express');
let app=express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get('/home', function(req, res){
    res.send("<h1>Home</h1>")
}); 


app.get('/about', function(req, res){
    res.send('There are complete information about motorbies in one page. Here, you can find new bikes with detailed inormation.')
}); 

app.get('/popularbikes', function(req, res){
    res.json([{src:"https://cdn.pixabay.com/photo/2017/07/12/06/02/bullet-2495974_960_720.jpg", Name:"Royal Enfield Classic 350", Price:' 1.80 Lakh - 2.07 Lakh'},
    {src:"https://wallpapercave.com/wp/wp4590462.jpg", Name:"Yamaha YZF R15 V3",price:"1.45 Lakh"},
    {src:src="http://stat.overdrive.in/wp-content/odgallery/2014/09/20378_200-Untitled-1.jpg", Name:"KTM RC 200", Price:"2.11 Lakh"},
    {src:"https://bd.gaadicdn.com/processedimages/honda/honda-shine/source/m_shine_11539695058.jpg?tr=w-439width=" ,Name:"Honda Shin", price:"72787 - 77582"}]);
});

app.get('/topbrands', function(req, res){
    res.json(["ROYAL ENFIELD"," HONDA", "HERO", "SUZUKI"]);
});

app.get('/topbrands/royalenfield', function(req, res){
    res.json({src:"https://e7.pngegg.com/pngimages/646/216/png-clipart-royal-enfield-logo-logo-enfield-cycle-co-ltd-royal-enfield-yellow-brand-royal-enfield-logo-blue-white.png", Name:"Royal Enfield Classic 350",src:"https://cdn.pixabay.com/photo/2017/07/12/06/02/bullet-2495974_960_720.jpg", Price:' 1.80 Lakh - 2.07 Lakh'});

});

app.get('/topbrands/HONDA', function(req, res){
    res.json({src:"https://www.carlogos.org/reviews-images/20180412-Honda-Motorcycle-logo-3000x2500.png",Name:"Honda Shin", price:"72787 - 77582"});

});

app.get('/bodytype', function(req, res){
    res.json(["Commuter", "Cruiser", " Moped", "Naked","Offroad", "Scooter", "Sports"])     
       
});

app.get('/bodytype/commuter', function(req, res){
    res.json({src :"https://bd.gaadicdn.com/upload/userfiles/images/58dce5456f78280c6004ca6e6cc8fcaf.jpg"})
});

app.get('/bodytype/cruiser', function(req, res){
    res.json({src :"https://blog.nationwide.com/wp-content/uploads/2015/06/Cruiser-Motorcycle-2000.jpg"})
});

app.get('/bodytype/moped', function(req, res){
    res.json({src :"http://www.2040-motos.com/_content/cars/images/79/258579/002.jpg" });
});


app.get('/bodytype/naked', function(req, res){
    res.json({src :"https://cdn.motor1.com/images/mgl/6bPWN/s1/5-great-used-naked-motorcycles-for-under-5000.jpg"});
});  

app.get('/bodytype/offroad', function(req, res){
    res.json({src :"https://dirtbikemagazine.com/wp-content/uploads/2017/11/OR13-Yamaha-WR450Fweb.jpg"});
}); 

app.get('/bodytype/scooter', function(req, res){
     res.json({src :"http://image.motorcycleforsales.com/Motorcycles/2015080712/2014-Tao-Tao-50cc-Scooter-Type-A1-A1---Motorcycles-For-Sale-18820.jpg"});
}); 

app.get('/bodytype/sports', function(req, res){
    res.json({src :"http://2.bp.blogspot.com/_LHlW9y4Qd4Q/TTM099gZkII/AAAAAAAAAW8/iGRD6ADQ-HU/s1600/Ducati_848_2008_02_1024x768.jpg"});
 }); 

app.get('/contact', function(req, res){
    res.send('<h1>Contact</h1>')
}); 

app.listen(5000)
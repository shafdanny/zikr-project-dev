import express from 'express';
import fs from 'fs';
import { join } from 'path';



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/list', function(req, res) {
	console.log(req.path);
	var media = {
    	audio: [], video:[]
	};

	fs.readdirSync(join(__dirname, 'public/audio')).forEach(function(file) {
        console.log(file);
        media.audio.push({ fileName: file, type:"audio"});

    });

	fs.readdirSync(join(__dirname, 'public/video')).forEach(function(file) {
        console.log(file);
        media.video.push({ fileName: file, type:"video"});
    });

	console.log(media);

    res.send(media);   
});

// more routes for our API will happen here


export default router;
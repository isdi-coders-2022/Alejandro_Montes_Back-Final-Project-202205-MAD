import { Artist } from '../models/artist.model.js';
export class ArtistController {
    getAllController = async (req, res) => {
        req;
        res.setHeader('Content-type', 'application/json');
        res.send(await Artist.find().populate('comics'));
    };
    getController = async (req, resp) => {
        resp.setHeader('Content-type', 'application/json');
        const artist = await Artist.findById(req.params.id).populate('comics');
        if (artist) {
            resp.send(JSON.stringify(artist));
        }
        else {
            resp.status(404);
            resp.send(JSON.stringify({}));
        }
    };
    postController = async (req, resp, next) => {
        try {
            const newItem = await Artist.create(req.body);
            resp.setHeader('Content-type', 'application/json');
            resp.status(201);
            resp.send(JSON.stringify(newItem));
        }
        catch (error) {
            next(error);
        }
    };
}

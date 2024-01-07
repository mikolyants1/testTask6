var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Post } from "../mongo.js";
export function chanPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            res.status(500).json({
                mess: 'body not found'
            });
            return;
        }
        ;
        const id = req.params.id;
        const posts = yield Post.find();
        const idx = posts.findIndex((i) => i._id == id);
        if (idx == -1) {
            res.status(400).json({
                mess: "post not found"
            });
            return;
        }
        ;
        const { status, description, title } = req.body;
        const newPosts = yield Post.findByIdAndUpdate(id, { title, status, description }, { new: true });
        res.status(200).json(newPosts);
    });
}

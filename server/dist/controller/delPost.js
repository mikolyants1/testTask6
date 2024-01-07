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
export function delPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield Post.findByIdAndDelete(id);
        const newPosts = posts
            .filter((i) => i._id !== id);
        res.status(200).json(newPosts);
    });
}

export interface IPost {
    _id:string,
    title:string,
    status:string,
    description:string
};

export type Null<T> = T|null;
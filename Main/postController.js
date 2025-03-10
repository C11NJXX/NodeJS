const posts = [
    {
        id: 1,
        name: 'post 1'
    },
    {
        id: 2,
        name: 'post 2'
    }
];

// export const getPosts = () => posts;

// const getPosts = () => posts;

// export { getPosts };

const getPosts = () => posts;
export const getPostsLength = () => posts.length;

export default getPosts;
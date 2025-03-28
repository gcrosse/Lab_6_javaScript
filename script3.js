console.log("Sequential & Parallel Data Fetching");
console.log("");


const fetchUserProfile = async (userId) => {
    console.log('Fetching user profile...');
    return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));
};

const fetchPosts = async (userId) => {
    console.log('Fetching posts...');
    return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
};

const fetchComments = async (postId) => {
    console.log('Fetching comments for post ${postID}...');
    return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
};

const fetchDataSequentially = async (userId) => {
    const userProfile = await fetchUserProfile(userId);
    console.log('User profile fetched:', userProfile);

    const posts = await fetchPosts(userProfile.id);
    console.log('Post fetched:', posts);

    for (const post of posts) {
        const comments = await fetchComments(post.postId);        
        console.log('Comments for post ${post.postId}:', comments);
    }
    console.log("_____________________");
};


console.log("Simulate Data Fetching Using Promise");
console.log("");

const fetchDataInParallel = async(userId) => {
    const userProfilePromise = fetchUserProfile(userId);
    const postsPromise = fetchPosts(userId);

    const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);
    console.log('User profile fetched:', userProfile);
    console.log('Posts fetched:', posts);

    const commentsPromises = posts.map(post => fetchComments(post.postID));
    const comments = await Promise.all(commentsPromises);

    comments.forEach((commentsForPost, index) => {
        console.log('Comments for post ${posts[index].postId}', commentsForPost);

        console.log("_____________________");
    });
};
fetchDataSequentially(1);

fetchDataInParallel(1);

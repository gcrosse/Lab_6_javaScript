console.log("Refactor with Async/Await");
console.log("");


const fetchUserProfile = async (userId) => {
    try{
        console.log('Fetching user profile...');
        return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));    
    } catch (error){
        console.error('Error fetching user profile:', error);
        throw new Error('Failed to fetch user profile');
        console.log("");
        }
};

const fetchPosts = async (userId) => {
    try {
        console.log('Fetching posts...');
        return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch post');
        console.log("");
    }

};
const fetchComments = async (postId) => {
  try {
    console.log('Fetching comments for post ${postID}...');
    return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw new Error('Failed to fetch comments');
    console.log("");
    } 

};

const fetchDataSequentially = async (userId) => {
    try {
        const userProfile = await fetchUserProfile(userId);
        console.log('User profile fetched:', userProfile);

        const posts = await fetchPosts(userProfile.id);
         console.log('Post fetched:', posts);
         console.log("");

        for (const post of posts) {
            const comments = await fetchComments(post.postId);        
            console.log('Comments for post ${post.postId}:', comments);
        }
        console.log("_____________________");
    } catch (error) {
        console.error('Error in sequential data fetching.', error);
        console.log("");
    }
    
};


const fetchDataInParallel = async(userId) => {
    try {
        const userProfilePromise = fetchUserProfile(userId);
        const postsPromise = fetchPosts(userId);

        const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);
        console.log('User profile fetched:', userProfile);
        console.log('Posts fetched:', posts);
        console.log("");

        const commentsPromises = posts.map(post => fetchComments(post.postID));
        const comments = await Promise.all(commentsPromises);

        comments.forEach((commentsForPost, index) => {
            console.log('Comments for post ${posts[index].postId}', commentsForPost);
            console.log("");
        });
    } catch {
        console.error('Error is parallel data fetching', error)
        console.log("");
    }
};
 
fetchDataSequentially(1);
fetchDataInParallel(1);

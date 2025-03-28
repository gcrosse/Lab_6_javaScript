console.log("Error Handling Simulation");
console.log("");


const fetchUserProfile = async (userId) => {
    try{
        console.log('Fetching user profile...');
        if (Math.error() < 0.2){
                throw new Error('Failed to fetch user profile');
        }
        return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));    
    } catch (error){
        console.error('Error fetching user profile:', error.message);
        return null;
        console.log("_______________________");
        }
};

const fetchPosts = async (userId) => {
    try {
        console.log('Fetching posts...');
        if (Math.random () < 0.2){ 
            throw new Error('Failed to fetch posts');
        }
        return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
        console.log("");
    }

};
const fetchComments = async (postId) => {
  try {
    console.log('Fetching comments for post ${postID}...');
    
    if (Math.random() < 0.3){
        throw new Error('Failed to fetch comments for post $(postId');
    }
    return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    return[];
    console.log("");
    } 

};

const fetchDataSequentially = async (userId) => {
    try {
        const userProfile = await fetchUserProfile(userId);
        if (!userProfile) {
            console.log('Skipping data fetching due to user profle error');
            return;    
        }
        console.log('User profile fetched:', userProfile);

        const posts = await fetchPosts(userProfile.id);
        if (post.length === 0) {
            console.log('Skipping post fetching due to post fetch error');
            return;
        }
        console.log('Post fetched:', posts);
        console.log("");

        for(const post of posts){
            const comments = await fetchComments(post.postId);
            if (comments.length === 0) {   
                console.log('Skipping comments for post ${post.postId} due to fetch error');
                continue;
        }
        console.log('Comments for post ${post.postId} comments');
    }
    console.log("__________________");
} catch(error){
    console.error('Error in sequential data fetching.', error);
    }
};


const fetchDataInParallel = async(userId) => {
    try {
        const userProfilePromise = fetchUserProfile(userId);
        const postsPromise = fetchPosts(userId);

        const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);


        if (!userProfile) {
        console.log('Skipping parallel data fetching due to user profile');
        return;
    }
        console.log('Post fetched:', posts);
        console.log("");

        const commentsPromises = posts.map(post => fetchComments(post.postID));
        const comments = await Promise.all(commentsPromises);

        comments.forEach((commentsForPost, index) => {
            if(commentsForPost.length === 0) {
                console.log('Skipping comments for post ${post[index].postID} due to fetch error.');
            } else {
                console.log('Comments for post ${posts[index].postId}', commentsForPost);
            }
        });
    } catch (error) {
        console.error('Error is parallel data fetching', error)
        console.log("");
    }
};
 
fetchDataSequentially(1);
fetchDataInParallel(1);

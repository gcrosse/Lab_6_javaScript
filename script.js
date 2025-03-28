// let promise =  new Promise((resolve, reject) => {
//     var myTest = 1;
//     let success = (myTest > 0);
//     if (success) {
//         resolve ("Operation completed successfully.");
//        }  else {
//         reject("Operation Failed.");
//        }   
// });

// console.log("Let's do something immediately after creating a promise");

// promise.then((message) => {
//     console.log(message);

// }) .then((message) =>{
//     console.log(message + "second message");
// })

// .catch ((error) => {
//     console.log (error);
// console.log("_____________________");
// });


// let promise = new Promise((resolve, reject) => {
//     resolve(1);
// })
//     promise.then(result => {
//         console.log(result);
//         return result * 2;
//     }).then(result => {
//         console.log(result);
//         return result * 3;
//     }).then(result => {
//         console.log(result);
//         return result * 4;
//     }).then(result => {
//         console.log(result);
//     console.log("_____________________");
//     });
// let promise =  new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve ("Operation completed successfully.");
//        }  else {
//         reject("Operation Failed.");
//        }   
// });
// promise.then(result => {
//     console.log(result);
// }).catch(error =>{
//     console.error("Error:", error);
//     console.log("_____________________");
// });
// console.log("Simulate Data Fetching Using Promise");
// console.log("");
// function delay(s) {
//     return new Promise(resolve => setTimeout(resolve, s));
// }
// async function executeTask() {
//     console.log('Fetching user_profile from server 001: Start....');
//     await delay(2000);
//     console.log('Task Completed: End');

//     console.log('Fetching user_post from server 001: Start....');
//     await delay(2000);
//     console.log('Task Completed: End');

//     console.log('Fetching user_comments server 001: Start....');
//     await delay(2000);
//     console.log('Task Completed: End');
//     console.log("_____________________");
// }
// executeTask();



// console.log("Sequential & Parallel Data Fetching");
// console.log("");


// const fetchUserProfile = async (userId) => {
//     console.log('Fetching user profile...');
//     return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));
// };

// const fetchPosts = async (userId) => {
//     console.log('Fetching posts...');
//     return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
// };

// const fetchComments = async (postId) => {
//     console.log('Fetching comments for post ${postID}...');
//     return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
// };

// const fetchDataSequentially = async (userId) => {
//     const userProfile = await fetchUserProfile(userId);
//     console.log('User profile fetched:', userProfile);

//     const posts = await fetchPosts(userProfile.id);
//     console.log('Post fetched:', posts);

//     for (const post of posts) {
//         const comments = await fetchComments(post.postId);        
//         console.log('Comments for post ${post.postId}:', comments);
//     }
//     console.log("_____________________");
// };


// console.log("Simulate Data Fetching Using Promise");
// console.log("");

// const fetchDataInParallel = async(userId) => {
//     const userProfilePromise = fetchUserProfile(userId);
//     const postsPromise = fetchPosts(userId);

//     const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);
//     console.log('User profile fetched:', userProfile);
//     console.log('Posts fetched:', posts);

//     const commentsPromises = posts.map(post => fetchComments(post.postID));
//     const comments = await Promise.all(commentsPromises);

//     comments.forEach((commentsForPost, index) => {
//         console.log('Comments for post ${posts[index].postId}', commentsForPost);

//         console.log("_____________________");
//     });
// };
// fetchDataSequentially(1);

// fetchDataInParallel(1);


// console.log("Refactor with Async/Await");
// console.log("");


// const fetchUserProfile = async (userId) => {
//     try{
//         console.log('Fetching user profile...');
//         return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));    
//     } catch (error){
//         console.error('Error fetching user profile:', error);
//         throw new Error('Failed to fetch user profile');
//         console.log("");
//         }
// };

// const fetchPosts = async (userId) => {
//     try {
//         console.log('Fetching posts...');
//         return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         throw new Error('Failed to fetch post');
//         console.log("");
//     }

// };
// const fetchComments = async (postId) => {
//   try {
//     console.log('Fetching comments for post ${postID}...');
//     return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//     throw new Error('Failed to fetch comments');
//     console.log("");
//     } 

// };

// const fetchDataSequentially = async (userId) => {
//     try {
//         const userProfile = await fetchUserProfile(userId);
//         console.log('User profile fetched:', userProfile);

//         const posts = await fetchPosts(userProfile.id);
//          console.log('Post fetched:', posts);
//          console.log("");

//         for (const post of posts) {
//             const comments = await fetchComments(post.postId);        
//             console.log('Comments for post ${post.postId}:', comments);
//         }
//         console.log("_____________________");
//     } catch (error) {
//         console.error('Error in sequential data fetching.', error);
//         console.log("");
//     }
    
// };


// const fetchDataInParallel = async(userId) => {
//     try {
//         const userProfilePromise = fetchUserProfile(userId);
//         const postsPromise = fetchPosts(userId);

//         const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);
//         console.log('User profile fetched:', userProfile);
//         console.log('Posts fetched:', posts);
//         console.log("");

//         const commentsPromises = posts.map(post => fetchComments(post.postID));
//         const comments = await Promise.all(commentsPromises);

//         comments.forEach((commentsForPost, index) => {
//             console.log('Comments for post ${posts[index].postId}', commentsForPost);
//             console.log("");
//         });
//     } catch {
//         console.error('Error is parallel data fetching', error)
//         console.log("");
//     }
// };
 
// fetchDataSequentially(1);
// fetchDataInParallel(1);



// console.log("Error Handling Simulation");
// console.log("");


// const fetchUserProfile = async (userId) => {
//     try{
//         console.log('Fetching user profile...');
//         if (Math.error() < 0.2){
//                 throw new Error('Failed to fetch user profile');
//         }
//         return new Promise((resolve) => setTimeout(() => resolve({ id: userId, name: 'Kim Kardasian'}), 1000));    
//     } catch (error){
//         console.error('Error fetching user profile:', error.message);
//         return null;
//         console.log("_______________________");
//         }
// };

// const fetchPosts = async (userId) => {
//     try {
//         console.log('Fetching posts...');
//         if (Math.random () < 0.2){ 
//             throw new Error('Failed to fetch posts');
//         }
//         return new Promise ((resolve) => setTimeout(() => resolve([{postId: 1, title: 'Post 1'}, {postId: 2, title: 'Post 2'}]), 1500));
//     } catch (error) {
//         console.error('Error fetching posts:', error.message);
//         return [];
//         console.log("");
//     }

// };
// const fetchComments = async (postId) => {
//   try {
//     console.log('Fetching comments for post ${postID}...');
    
//     if (Math.random() < 0.3){
//         throw new Error('Failed to fetch comments for post $(postId');
//     }
//     return new Promise ((resolve) => setTimeout(() => resolve([{commentId: 1, text: 'Nice Post!'}, { commentId: 2, text: 'Interesting!'}]),  2000));
//   } catch (error) {
//     console.error('Error fetching comments:', error.message);
//     return[];
//     console.log("");
//     } 

// };

// const fetchDataSequentially = async (userId) => {
//     try {
//         const userProfile = await fetchUserProfile(userId);
//         if (!userProfile) {
//             console.log('Skipping data fetching due to user profle error');
//             return;    
//         }
//         console.log('User profile fetched:', userProfile);

//         const posts = await fetchPosts(userProfile.id);
//         if (post.length === 0) {
//             console.log('Skipping post fetching due to post fetch error');
//             return;
//         }
//         console.log('Post fetched:', posts);
//         console.log("");

//         for(const post of posts){
//             const comments = await fetchComments(post.postId);
//             if (comments.length === 0) {   
//                 console.log('Skipping comments for post ${post.postId} due to fetch error');
//                 continue;
//         }
//         console.log('Comments for post ${post.postId} comments');
//     }
//     console.log("__________________");
// } catch(error){
//     console.error('Error in sequential data fetching.', error);
//     }
// };


// const fetchDataInParallel = async(userId) => {
//     try {
//         const userProfilePromise = fetchUserProfile(userId);
//         const postsPromise = fetchPosts(userId);

//         const [userProfile, posts] = await  Promise.all([userProfilePromise, postsPromise]);


//         if (!userProfile) {
//         console.log('Skipping parallel data fetching due to user profile');
//         return;
//     }
//         console.log('Post fetched:', posts);
//         console.log("");

//         const commentsPromises = posts.map(post => fetchComments(post.postID));
//         const comments = await Promise.all(commentsPromises);

//         comments.forEach((commentsForPost, index) => {
//             if(commentsForPost.length === 0) {
//                 console.log('Skipping comments for post ${post[index].postID} due to fetch error.');
//             } else {
//                 console.log('Comments for post ${posts[index].postId}', commentsForPost);
//             }
//         });
//     } catch (error) {
//         console.error('Error is parallel data fetching', error)
//         console.log("");
//     }
// };
 
// fetchDataSequentially(1);
// fetchDataInParallel(1);


console.log('Chaining Async Functions');
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



const getUserContent = async (userId) => {
    try {
        console.log("Start data fetching...");

        const userProfile = await fetchUserProfile(userId);
        if (!userProfile) {
            console.log('Skipping data fetching due to user profle error');
            return;    
        }
        console.log('User profile retrived:', userProfile);

        const posts = await fetchPosts(userProfile.id);
        if (posts.length === 0) {
            console.log('Skipping post fetching due to post fetch error');
            return;
        }
        console.log('Post retrived:', posts);

        const comments = [];
        for(const post of posts){
            const postComments = await fetchComments(post.postId);
            if (postComments.length === 0) {   
                console.log('Skipping comments for post ${post.postId} due to fetch error');
            } else {
                comments.push({ postId: post.postId, comments: postComments });
                console.log('Comments for post ${post.postId}.', postComments);
        }
    }
 
        console.log("All data retrived successfully!");
        console.log("User Profile:", userProfile);
        console.log("Post:", posts);
        console.log("CommentsL", comments);

    } catch(error){
        console.error('Error during user content fetching.', error.message);
    }
};

getUserContent(1);

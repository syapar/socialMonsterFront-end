import { post } from '../utils/httpRequests';

export const init = () => {
    return new Promise((resolve)=>{
        resolve();
    });
};


export const login = () => {
    return new Promise((resolve)=>{
        post('/api/v1/twitter/request',{}).then((response)=>{
            if(response.errorCode===200){
                // console.log('request Url:',response,response.errorCode);
                resolve(response.result.requestUrl);
            }else{
                throw new Error(response.result);
            }
        }).catch((e)=>{
            throw  e;
        })
    });
};

export const fetchPosts = (socialAccount) => {
    return new Promise((resolve)=>{
        post('/api/v1/twitter/posts',{
            socialAccountId:socialAccount.id,
        }).then((response)=>{
            console.log('post Response',response.result,response.errorCode);
            resolve(response.result);
        }).catch((e)=>{
            throw  e;
        })
    });
};

export const sendloginResponse = (oauth_token, oauth_verifier) => {
    console.log('auth Response');
    return post('/api/v1/twitter/auth',{
        oauth_token,
        oauth_verifier,
    }).then((response)=>{
        console.log('auth Response',response.result,response.errorCode);
    }).catch((e)=>{
        throw  e;
    });
};


// fetch('/posts').then((response)=>{
//     // console.log(response.json());
//     resolve(response.json());
// }).catch((e)=>{
//     console.log(e.message);
// });
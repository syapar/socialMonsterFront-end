import { post, get } from '../utils/httpRequests';

export const login = () => {
    window.location = `https://api.instagram.com/oauth/authorize/?client_id=b2c8e436d34d427b8b92be156f7b7d53&redirect_uri=http://localhost:3000/myAccount&response_type=code`;
};

export const sendloginResponse = (code) => {
    console.log('auth Response');
    return post('/api/v1/instagram/auth',{
        code,
    }).then((response)=>{
        console.log('auth Response',response.result,response.errorCode);
    }).catch((e)=>{
        throw  e;
    });
};

export const fetchPosts = (socialAccount) => {
    return new Promise((resolve, reject)=>{
        get('https://api.instagram.com/v1/users/self/media/recent/',{ access_token: socialAccount.access_token }).then((response) => {
            console.log('insagraaam', response);
            resolve(response);
        }).catch(e => {
            reject(e);
        });
    });
};
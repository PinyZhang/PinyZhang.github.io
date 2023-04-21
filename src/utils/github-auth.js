// GitHub 应用程序的客户端 ID 和客户端密钥
const client_id = '9506d781b79700867d72';
const client_secret = 'a29453969d08a7607d6529a987278707cc0ed359';

// 重定向回到应用程序的 URL
const redirect_uri = window.location.href;

// 登录页面
export function githubLogin() {
    const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user:email`;
    window.location.href = url;
}

// GitHub 身份验证回调
export async function githubCallback() {
    const code = new URLSearchParams(window.location.search).get('code');

    // URL 中没有code 表示不是回调
    if (!code) {
        return;
    }

    const params = {
        client_id,
        client_secret,
        code
    };
    const headers = {
        Accept: 'application/json'
    };

    const response = await fetch(`http://117.50.175.95/githubApi/login/oauth/access_token?${new URLSearchParams(params)}`, {
        headers,
        method: 'POST',
    });

    const {
        access_token
    } = await response.json();

    const userResponse = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    const userData = await userResponse.json();
    sessionStorage.setItem('github_access_token', access_token);
    sessionStorage.setItem('github_user_data', JSON.stringify(userData));
    window.location.href = '/';
}

/**
 * 获取User信息
 * @returns 
 */
export const getUserData = () => {
    const githubUserData = sessionStorage.getItem('github_user_data');

    try {
        return JSON.parse(githubUserData);
    } catch {
        return null;
    }
};

    async function exchangeCodeForToken(code) {
        const clientId = 'shgh3dbjab99n92bksgusjcb2999cbakkb2789dhmklaoau32baj:1k';
        const clientSecret = '7228bwhd2g236wjb89bss1b'; // IMPORTANT: This should be handled securely on the server-side
        const redirectUri = 'http://localhost:5678/oauth/redirect';
        const tokenUrl = 'https://accounts.google.com/o/oauth2/v2/auth/token';

        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri
            })
        });

        const data = await response.json();
        const accessToken = data.access_token;
        // Store the access token securely (e.g., in local storage, or send to your backend)
        localStorage.setItem('accessToken', accessToken);
        console.log('Access Token:', accessToken);
    }

    async function getUserProfile(accessToken) {
        const apiUrl = 'https://api.your-oauth-provider.com/user/profile';
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const profileData = await response.json();
        console.log('User Profile:', profileData);
    }

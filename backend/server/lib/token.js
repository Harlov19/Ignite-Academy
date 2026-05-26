import jwt from 'jsonwebtoken';

const access_secret = process.env.ACCESS_TOKEN_SECRET;
const refresh_secret = process.env.REFRESH_TOKEN_SECRET;

if (!access_secret || !refresh_secret) {
    throw new Error('JWT secrets are missing in environment variables');
}

export function setToken(res, payload) {
    // Create Access Token (Short-lived)
    const accessToken = jwt.sign(payload, access_secret, { expiresIn: '15m' });

    //  Create Refresh Token (Long-lived)
    const refreshToken = jwt.sign(payload, refresh_secret, { expiresIn: '7d' });

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
       
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', 
        path: '/',
    };

    // Set Access Token Cookie
    res.cookie('token', accessToken, {
        ...cookieOptions,
        maxAge: 15 * 60 * 1000, // Matches 15m expiry
    });

    // Set Refresh Token Cookie
    res.cookie('rft', refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
}

export function removeToken(res) {
    const clearOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        path: '/',
    };

    res.clearCookie('token', clearOptions);
    res.clearCookie('rft', clearOptions);
}
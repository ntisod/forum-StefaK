module.exports = token => {
    let base64url = token.split('.')[1];
    let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = Buffer.from(base64, "base64").toString("ascii");

    return JSON.parse(jsonPayload);
}
function joinAndNormalizeURL(...segments) {
    // Join the URL segments using a forward slash '/'
    const joinedURL = segments.join('/');

    // Create a new URL object to normalize the URL
    const url = new URL(joinedURL, window.location.origin);

    // Return the normalized URL
    return url.href;
}

// Example usage:
const segment1 = 'https://example.com/';
const segment2 = 'path/';
const segment3 = 'to/resource';

const normalizedURL = joinAndNormalizeURL(segment1, segment2, segment3);

console.log(normalizedURL); // Output: "https://example.com/path/to/resource"

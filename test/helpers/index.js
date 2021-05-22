/**
 * Set the test context
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 */
export function setTestContext(data = {}) {
    const {path, products = [], user} = data;
    const {username} = user;

    // Go to the domain and set the cookies
    browser.url('');
    //browser.execute(`${userStorage} ${productStorage}`);
    // set a single cookie
    browser.setCookies({
        name: 'session-username',
        value: username

    })

    // Now got to the page
    browser.url(path);
}

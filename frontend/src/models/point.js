
async function addData(points) {
    const options = {
        method: 'POST',
        body: JSON.stringify(points),
        headers: {
            'Content-type': 'application/json',

        }
    }
    await fetch(`${process.env.API_BASE_URL}/point`, options);

};

// eslint-disable-next-line import/prefer-default-export
export { addData }
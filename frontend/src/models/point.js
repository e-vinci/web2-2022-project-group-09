

async function getPoints() {
    const response = await fetch('/api/point');
    const points = await response.json();
    return points;
}

async function addData(points) {
    const options = {
        method: 'POST',
        body: JSON.stringify(points),
        headers: {
            'Content-type': 'application/json',

        }
    }
    await fetch(`/api/point`, options);

};

export { getPoints, addData };
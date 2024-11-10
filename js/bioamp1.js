//create function to store a json blob in local storage
function storeJsonBlob(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

//create function to retrieve a json blob from local storage
function retrieveJsonBlob(key) {
  return JSON.parse(localStorage.getItem(key));
}

document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectButton');
    connectButton.addEventListener('click', async () => {
        if ('serial' in navigator) {
            try {
                port = await navigator.serial.requestPort();
                await port.open({ baudRate: 921600 });
                console.log('Serial port opened:', port);
            } catch (err) {
                console.error('There was an error opening the serial port:', err);
            }
        } else {
            console.log('Web Serial API not supported.');
        }
    })
});
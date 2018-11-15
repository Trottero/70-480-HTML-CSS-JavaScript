self.onmessage = function (event) {
    self.postMessage(event.data * 5);
}
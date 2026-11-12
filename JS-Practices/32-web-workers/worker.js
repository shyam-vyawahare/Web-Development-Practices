
/*
    Web Worker Thread
    Performs calculations independently
    of the browser's main JavaScript thread.
*/

self.onmessage = (event) => {
    const { type, limit } = event.data;

    if (type !== "calculate") {
        return;
    }

    if (!Number.isSafeInteger(limit) || limit < 1) {
        self.postMessage({
            type: "error",
            message: "Invalid calculation limit."
        });

        return;
    }

    let sum = 0;

    const batchSize = Math.max(1, Math.floor(limit / 100));

    for (let i = 1; i <= limit; i++) {
        sum += i;

        if (i % batchSize === 0 || i === limit) {
            const progress = Math.floor((i / limit) * 100);

            self.postMessage({
                type: "progress",
                progress
            });
        }
    }

    self.postMessage({
        type: "result",
        sum
    });
};

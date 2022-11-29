function download(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        })
        .catch(console.error);
}

let images = document.querySelectorAll("img");
for (let i of images) {
    const url = i.src;
    const filename_full = url.substring(url.lastIndexOf('/')+1);
    const filename = filename_full.substring(0, filename_full.lastIndexOf('?'));
    download(url,filename)
}
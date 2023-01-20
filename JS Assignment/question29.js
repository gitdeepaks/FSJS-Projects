function getFileExtension(fileName) {
    let fileExtension = fileName.split(".").pop();
    console.log(fileExtension);
}

let file = "example.txt";
getFileExtension(file); // Output: txt

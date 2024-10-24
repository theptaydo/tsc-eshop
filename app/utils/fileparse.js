// /util/fileparse.js
const fs = require('fs');
const path = require('path');

// Hàm đọc file
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Hàm lưu file
const saveFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('File saved successfully');
      }
    });
  });
};

// Hàm xóa file
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('File deleted successfully');
      }
    });
  });
};

module.exports = { readFile, saveFile, deleteFile };

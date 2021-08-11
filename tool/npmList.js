var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
const npmFilePath = path.resolve(__dirname + '/../npm');
// console.log(npmFilePath)


function fileDisplaySync(filePath) {
  try {
    const files = fs.readdirSync(filePath) || []
    // console.log(files)
    //遍历读取到的文件列表
    files.forEach((filename) => {
      //获取当前文件的绝对路径
      var filedir = path.join(filePath, filename);
      //根据文件路径获取文件信息，返回一个fs.Stats对象
      const stats = fs.statSync(filedir) || {}
      var isFile = stats.isFile();//是文件
      var isDir = stats.isDirectory();//是文件夹
      if (isFile) {
        // console.log(filedir);
        const filedirRep = filedir.replace(npmFilePath, '.')
        // console.log(filedirRep);
        _fileArr.push(filedirRep)
      }
      if (isDir) {
        fileDisplaySync(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
      }
    });
  } catch (error) {
    console.error(error)
  }
}


let _fileArr = []
//调用文件遍历方法
fileDisplaySync(npmFilePath);
_fileArr = _fileArr.sort()
console.log('_fileArr->', _fileArr.length)

// 判断文件是否存在
const npmJsFile = path.resolve(__dirname + '/../npm/index.js');
var isExist = fs.existsSync(npmJsFile)
if (isExist) {
  const txt = `var fileList = ${JSON.stringify(_fileArr)}`
  try {
    fs.writeFileSync(npmJsFile, txt, 'utf8');
  } catch (error) {
    console.error(error);
  }
  console.log('npm list ok')
}







// ================================
// 以下为异步方法

// /**
//  * 文件遍历方法
//  * @param filePath 需要遍历的文件路径
//  */
// function fileDisplay(filePath) {

//   //根据文件路径读取文件，返回文件列表
//   fs.readdir(filePath, function (err, files) {
//     if (err) {
//       console.warn(err)
//     } else {
//       //遍历读取到的文件列表
//       files.forEach(function (filename) {
//         //获取当前文件的绝对路径
//         var filedir = path.join(filePath, filename);
//         //根据文件路径获取文件信息，返回一个fs.Stats对象
//         fs.stat(filedir, function (eror, stats) {
//           if (eror) {
//             console.warn('获取文件stats失败');
//           } else {
//             var isFile = stats.isFile();//是文件
//             var isDir = stats.isDirectory();//是文件夹
//             if (isFile) {
//               // console.log(filedir);
//               const filedirRep = filedir.replace(npmFilePath, '')
//               // console.log(filedirRep);
//             }
//             if (isDir) {
//               fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
//             }
//           }
//         })
//       });
//     }
//   });
// }

//调用文件遍历方法
// fileDisplay(npmFilePath);
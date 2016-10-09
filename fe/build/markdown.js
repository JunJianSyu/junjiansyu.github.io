/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 16/9/14
 /|_M_|\
 |       | JunJianSyu
 \|^V^|/
 */
var fs = require('fs')
var path = require('path')
var myPath = path.resolve(__dirname, '../src/assets/markdown')
fs.readdir(myPath, function (err, files) {
    if (err) throw err
    files.map(function (item, index) {
        var stats = fs.lstatSync(myPath + '/' + item)
        if (stats.isFile()) {
            fs.readFile(myPath + '/' + item, function (err, file) {
                if (err) throw err
                // write file
                var _fileName = item.split('.')[0]
                var Json_str = `var content = "${file.toString().replace(/\n/g, '\\n')}"\nmodule.exports = {content: content}\n`
                fs.exists(myPath + '/' + _fileName + '.js', function (exists) {
                    if (exists) {
                        fs.unlinkSync(myPath + '/' + _fileName + '.js', function (err) {
                            if (err) throw err
                            console.log(`success delete ${_fileName}.js`)
                        })
                    }
                    fs.writeFile(myPath + '/' + _fileName + '.js', Json_str, function (err) {
                        if (err) throw err
                    })
                })
            })
        }
    })
})
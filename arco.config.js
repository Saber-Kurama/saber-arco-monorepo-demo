/*
 * @Author: saber
 * @Date: 2022-02-28 10:36:27
 * @LastEditTime: 2022-02-28 17:45:53
 * @LastEditors: saber
 * @Description: 
 */
module.exports = {
  // globs to your packages
  // e.g. [ 'packages/*' ]
  packages: ['packages/*'],
  // command you want to replace 'arco subCommand'
  // e.g. publish: 'lerna publish'
  alias: {
    publish: '',
  },
  // initial meta for 'arco generate'
  initialMeta: {
    group: 73,
  },
  // path of arco block insertion, relative to /src ('myPath' will be resolved as '/src/myPath')
  // pathBlockInsert: 'pathRelativeToSrc',
};

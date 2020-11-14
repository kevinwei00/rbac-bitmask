import perm from './src/permissions.js';

// console.log(perm.getPermissions());
console.log(perm.getPermissionsPretty());
// console.log(perm.getPermissionBits('perm_30'));

console.log(perm.hasPermission('ADMIN', 'perm_02')); // true
console.log(perm.hasPermission('ADMIN', 'perm_04')); // true
console.log(perm.hasPermission('ADMIN', 'perm_06')); // true
console.log(perm.hasPermission('ADMIN', 'perm_10')); // false
console.log(perm.hasPermission('USER', 'perm_01')); // true
console.log(perm.hasPermission('USER', 'perm_03')); // true
console.log(perm.hasPermission('USER', 'perm_05')); // true
console.log(perm.hasPermission('USER', 'perm_10')); // false

console.log('-----------------------------');

perm.setRoleBitmask('ADMIN', ['perm_10', 'perm_30']);
console.log(perm.hasPermission('ADMIN', 'perm_02')); // true
console.log(perm.hasPermission('ADMIN', 'perm_04')); // true
console.log(perm.hasPermission('ADMIN', 'perm_06')); // true
console.log(perm.hasPermission('ADMIN', 'perm_10')); // true
console.log(perm.hasPermission('ADMIN', 'perm_30')); // true
// Example:
// {
//   name: "ADMIN",
//   permissions: 7
// }
// const roles = service.getRoles();

const rolesTest = {
  ADMIN: 84, // 4 | 16 | 64
  USER: 42 // 2 | 8 | 32
}

const permissionsInternal = {
  0: 'perm_00',
  1: 'perm_01',
  2: 'perm_02',
  3: 'perm_03',
  4: 'perm_04',
  5: 'perm_05',
  6: 'perm_06',
  7: 'perm_07',
  8: 'perm_08',
  9: 'perm_09',
  10: 'perm_10',
  11: 'perm_11',
  12: 'perm_12',
  13: 'perm_13',
  14: 'perm_14',
  15: 'perm_15',
  16: 'perm_16',
  17: 'perm_17',
  18: 'perm_18',
  19: 'perm_19',
  20: 'perm_20',
  21: 'perm_21',
  22: 'perm_22',
  23: 'perm_23',
  24: 'perm_24',
  25: 'perm_25',
  26: 'perm_26',
  27: 'perm_27',
  28: 'perm_28',
  29: 'perm_29',
  30: 'perm_30'
}

let permissionsCached;

export function getPermissions() {
  if (!permissionsCached) {
    const perms = {};
    const keys = Object.keys(permissionsInternal);
    for (let i = 0; i < keys.length; i++) {
      const permissionName = permissionsInternal[keys[i]];
      if (permissionName) {
        perms[permissionName] = 1 << parseInt(keys[i]);
      }
    }
    permissionsCached = perms;
  }

  return permissionsCached;
}

export function getPermissionsPretty() {
  const res = [];
  const perms = getPermissions();
  for (let perm in perms) {
    res.push([perms[perm], perm]);
  }
  return res.sort((a, b) => a[0] - b[0]);
}

export function getPermissionBits(permissionName) {
  return getPermissions()[permissionName];
}

export function hasPermission(roleName, permissionName) {
  const bitmask = rolesTest[roleName];
  const bits = getPermissionBits(permissionName);
  return bits ? !!(bitmask & bits) : false;
}

export function setRoleBitmask(roleName, permissions) {
  const bitmask = rolesTest[roleName];
  const newBits = permissions.reduce((acc, permissionName) => {
    const bits = getPermissionBits(permissionName);
    return bits ? acc | bits : acc;
  }, 0);
  rolesTest[roleName] = bitmask | newBits;
}

export default {
  getPermissions,
  getPermissionsPretty,
  getPermissionBits,
  hasPermission,
  setRoleBitmask
}
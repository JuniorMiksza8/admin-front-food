import useAuth from "./useAuth";

export const usePermissions = () => {
  const { permissions } = useAuth();


  const hasPermission = (permission: string): boolean => {
    return permissions.includes(permission);
  };

  const hasAnyPermission = (requiredPermissions: string[]): boolean => {
    if (requiredPermissions.length === 0) return true;
    return requiredPermissions.some(permission => permissions.includes(permission));
  };

  const hasAllPermissions = (requiredPermissions: string[]): boolean => {
    if (requiredPermissions.length === 0) return true;
    return requiredPermissions.every(permission => permissions.includes(permission));
  };

  return {
    permissions,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
  };
};

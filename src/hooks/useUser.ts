import * as userService from '../services/user.service';

const useUser = () => {
  const createUser = async (uid: string, email: string | null): Promise<void> => {
    return userService.createUser({
      uid,
      email,
      createdAt: new Date(),
    });
  };

  return {
    createUser,
  };
};

export default useUser;
